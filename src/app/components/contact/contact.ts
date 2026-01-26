import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Button } from '../../shared/button/button';
import { ArrowBtnComponent } from '../../shared/arrow-btn/arrow-btn';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Button, ArrowBtnComponent],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  contactForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacyAccepted: [false, [Validators.requiredTrue]]
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

  onSubmit() {
    this.formSubmitted = true;

    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      // TODO: Implement form submission logic (e.g., send to backend)

      // Reset form after successful submission
      this.contactForm.reset();
      this.formSubmitted = false;
    }
  }

  hasError(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched || this.formSubmitted));
  }

  isValid(controlName: string): boolean {
    const control = this.contactForm.get(controlName);
    return !!(control && control.valid && control.value && (control.dirty || control.touched));
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
