import { Component, ChangeDetectionStrategy, inject, PLATFORM_ID, computed, effect } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { ArrowBtnComponent } from '../../shared/arrow-btn/arrow-btn';
import { TranslocoDirective } from '@jsverse/transloco';
import { ScrollAnimateDirective } from '../../shared/scroll-animate/scroll-animate.directive';
import { Email } from '../../email';

function strictEmailValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) return null;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}$/;
  return emailRegex.test(control.value) ? null : { email: true };
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink, Button, ArrowBtnComponent, TranslocoDirective, ScrollAnimateDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  private readonly emailService = inject(Email);

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, strictEmailValidator]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacyAccepted: [false, [Validators.requiredTrue]],
  });

  formSubmitted = false;

  // Email service signals
  readonly sendStatus = this.emailService.sendStatus;
  readonly errorMessage = this.emailService.errorMessage;
  readonly isLoading = computed(() => this.sendStatus() === 'sending');
  readonly showSuccess = computed(() => this.sendStatus() === 'success');
  readonly showError = computed(() => this.sendStatus() === 'error');

  constructor() {
    // Handle form disable/enable based on loading state
    effect(() => {
      if (this.isLoading()) {
        this.contactForm.disable();
      } else {
        this.contactForm.enable();
      }
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }

  get privacyAccepted() {
    return this.contactForm.get('privacyAccepted');
  }

  async onSubmit(): Promise<void> {
    this.formSubmitted = true;
    if (!this.contactForm.valid) return;

    const success = await this.submitFormData();
    if (success) this.resetFormAfterSuccess();
  }

  private async submitFormData(): Promise<boolean> {
    const formData = this.contactForm.value;
    return this.emailService.sendEmail({
      name: formData.name?.trim(),
      email: formData.email?.trim(),
      message: formData.message?.trim(),
    });
  }

  private resetFormAfterSuccess(): void {
    this.contactForm.reset();
    this.formSubmitted = false;
    setTimeout(() => this.emailService.resetStatus(), 5000);
  }

  hasError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    // Only show error after blur (touched) or form submission, not during typing
    return !!(
      control &&
      control.invalid &&
      (control.touched || this.formSubmitted)
    );
  }

  isValid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.valid && control.value && (control.dirty || control.touched));
  }

  scrollToTop(event: Event): void {
    if (!this.isBrowser) {
      return;
    }

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
