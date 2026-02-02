import { Component, ChangeDetectionStrategy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { ArrowBtnComponent } from '../../shared/arrow-btn/arrow-btn';
import { TranslocoDirective } from '@jsverse/transloco';
import { ScrollAnimateDirective } from '../../shared/scroll-animate/scroll-animate.directive';

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

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacyAccepted: [false, [Validators.requiredTrue]],
  });

  formSubmitted = false;

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

  onSubmit() {
    this.formSubmitted = true;

    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      this.contactForm.reset();
      this.formSubmitted = false;
    }
  }

  hasError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || this.formSubmitted)
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
