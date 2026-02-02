import { Injectable, signal, inject } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../environments/environment';

export interface EmailConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export type SendStatus = 'idle' | 'sending' | 'success' | 'error';

@Injectable({
  providedIn: 'root',
})
export class Email {
  readonly sendStatus = signal<SendStatus>('idle');
  readonly errorMessage = signal<string>('');

  private readonly config: EmailConfig = environment.emailjs;

  async sendEmail(data: EmailData): Promise<boolean> {
    this.prepareForSending();

    try {
      await this.sendEmailViaService(data);
      this.handleSuccess();
      return true;
    } catch (error) {
      this.handleError(error);
      return false;
    }
  }

  resetStatus(): void {
    this.sendStatus.set('idle');
    this.errorMessage.set('');
  }

  private prepareForSending(): void {
    this.sendStatus.set('sending');
    this.errorMessage.set('');
  }

  private async sendEmailViaService(data: EmailData): Promise<void> {
    const templateParams = this.buildTemplateParams(data);

    const response = await emailjs.send(
      this.config.serviceId,
      this.config.templateId,
      templateParams,
      this.config.publicKey,
    );

    console.log('EmailJS Response:', response);
  }

  private buildTemplateParams(data: EmailData): Record<string, string> {
    return {
      from_name: data.name,
      from_email: data.email,
      email: data.email,
      message: data.message,
      to_name: 'Portfolio Owner',
    };
  }

  private handleSuccess(): void {
    this.sendStatus.set('success');
  }

  private handleError(error: unknown): void {
    this.sendStatus.set('error');
    this.errorMessage.set('Failed to send email. Please try again.');
    console.error('Email sending error:', error);
  }
}
