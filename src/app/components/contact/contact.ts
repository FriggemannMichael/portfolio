import { Component, ChangeDetectionStrategy, inject, PLATFORM_ID, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { ArrowBtnComponent } from '../../shared/arrow-btn/arrow-btn';
import { TranslocoDirective } from '@jsverse/transloco';
import { ScrollAnimateDirective } from '../../shared/scroll-animate/scroll-animate.directive';
import { Email } from '../../email';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Button, ArrowBtnComponent, TranslocoDirective, ScrollAnimateDirective],
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
    email: ['', [Validators.required, Validators.email]],
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

  async onSubmit() {
    this.formSubmitted = true;

    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      const success = await this.emailService.sendEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      if (success) {
        this.contactForm.reset();
        this.formSubmitted = false;

        // Reset status after 5 seconds
        setTimeout(() => {
          this.emailService.resetStatus();
        }, 5000);
      }
    }
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
