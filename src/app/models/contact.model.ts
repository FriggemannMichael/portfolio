export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';
