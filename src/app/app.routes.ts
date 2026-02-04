import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'legal-notice',
    loadComponent: () =>
      import('./components/legal-notice/legal-notice').then(m => m.LegalNotice),
  },
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./components/privacy-policy/privacy-policy').then(m => m.PrivacyPolicy),
  },
];
