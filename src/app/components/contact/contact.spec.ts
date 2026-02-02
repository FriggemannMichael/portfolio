import { FormBuilder, FormGroup, Validators } from '@angular/forms';

describe('Contact Form Logic', () => {
  let contactForm: FormGroup;
  let formSubmitted: boolean;

  beforeEach(() => {
    const fb = new FormBuilder();
    contactForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      privacyAccepted: [false, [Validators.requiredTrue]],
    });
    formSubmitted = false;
  });

  const name = () => contactForm.get('name');
  const email = () => contactForm.get('email');
  const message = () => contactForm.get('message');
  const privacyAccepted = () => contactForm.get('privacyAccepted');

  const hasError = (controlName: string): boolean => {
    const control = contactForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched || formSubmitted));
  };

  const isValid = (controlName: string): boolean => {
    const control = contactForm.get(controlName);
    return !!(control && control.valid && control.value && (control.dirty || control.touched));
  };

  const onSubmit = () => {
    formSubmitted = true;
    if (contactForm.valid) {
      contactForm.reset();
      formSubmitted = false;
    }
  };

  it('should have contactForm initialized', () => {
    expect(contactForm).toBeTruthy();
  });

  it('should have all form controls', () => {
    expect(name()).toBeTruthy();
    expect(email()).toBeTruthy();
    expect(message()).toBeTruthy();
    expect(privacyAccepted()).toBeTruthy();
  });

  it('should have formSubmitted initialized to false', () => {
    expect(formSubmitted).toBe(false);
  });

  describe('Form Validation', () => {
    it('should be invalid when empty', () => {
      expect(contactForm.valid).toBe(false);
    });

    it('should require name with minimum 2 characters', () => {
      name()?.setValue('A');
      expect(name()?.valid).toBe(false);

      name()?.setValue('AB');
      expect(name()?.valid).toBe(true);
    });

    it('should require valid email', () => {
      email()?.setValue('invalid');
      expect(email()?.valid).toBe(false);

      email()?.setValue('test@example.com');
      expect(email()?.valid).toBe(true);
    });

    it('should require message with minimum 10 characters', () => {
      message()?.setValue('Short');
      expect(message()?.valid).toBe(false);

      message()?.setValue('This is a valid message');
      expect(message()?.valid).toBe(true);
    });

    it('should require privacy acceptance', () => {
      privacyAccepted()?.setValue(false);
      expect(privacyAccepted()?.valid).toBe(false);

      privacyAccepted()?.setValue(true);
      expect(privacyAccepted()?.valid).toBe(true);
    });

    it('should be valid when all fields are correctly filled', () => {
      name()?.setValue('John Doe');
      email()?.setValue('john@example.com');
      message()?.setValue('This is a test message for the contact form.');
      privacyAccepted()?.setValue(true);

      expect(contactForm.valid).toBe(true);
    });
  });

  describe('hasError function', () => {
    it('should return false for untouched controls', () => {
      expect(hasError('name')).toBe(false);
    });

    it('should return true for touched invalid controls', () => {
      name()?.markAsTouched();
      expect(hasError('name')).toBe(true);
    });

    it('should return true after form submission with invalid controls', () => {
      formSubmitted = true;
      expect(hasError('name')).toBe(true);
    });
  });

  describe('isValid function', () => {
    it('should return false for empty controls', () => {
      expect(isValid('name')).toBe(false);
    });

    it('should return true for valid touched controls', () => {
      name()?.setValue('Valid Name');
      name()?.markAsTouched();
      expect(isValid('name')).toBe(true);
    });
  });

  describe('onSubmit function', () => {
    it('should set formSubmitted to true', () => {
      onSubmit();
      expect(formSubmitted).toBe(true);
    });

    it('should not reset form when invalid', () => {
      name()?.setValue('Test');
      onSubmit();
      expect(name()?.value).toBe('Test');
    });

    it('should reset form when valid', () => {
      name()?.setValue('John Doe');
      email()?.setValue('john@example.com');
      message()?.setValue('This is a test message for the contact form.');
      privacyAccepted()?.setValue(true);

      onSubmit();

      expect(formSubmitted).toBe(false);
      expect(name()?.value).toBeFalsy();
    });
  });
});
