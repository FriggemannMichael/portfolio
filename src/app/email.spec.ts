import { TestBed } from '@angular/core/testing';

import { Email, EmailData } from './email';

describe('Email', () => {
  let service: Email;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Email);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have initial sendStatus as idle', () => {
    expect(service.sendStatus()).toBe('idle');
  });

  it('should have initial errorMessage as empty', () => {
    expect(service.errorMessage()).toBe('');
  });

  describe('resetStatus', () => {
    it('should reset sendStatus to idle', () => {
      service.resetStatus();
      expect(service.sendStatus()).toBe('idle');
    });

    it('should clear errorMessage', () => {
      service.resetStatus();
      expect(service.errorMessage()).toBe('');
    });
  });

  describe('EmailData interface', () => {
    it('should accept valid email data', () => {
      const emailData: EmailData = {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Test message',
      };
      expect(emailData.name).toBe('John Doe');
      expect(emailData.email).toBe('john@example.com');
      expect(emailData.message).toBe('Test message');
    });
  });
});
