import { Routes } from '@angular/router';
import { Component } from '@angular/core';

// Leere Komponente für Homepage (Router-Outlet bleibt leer)
@Component({
  selector: 'app-empty',
  template: '',
  standalone: true,
})
class EmptyComponent {}

export const routes: Routes = [
  {
    path: '',
    component: EmptyComponent, // Leere Komponente für Homepage
  },
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
  {
    path: '**',
    loadComponent: () =>
      import('./components/not-found/not-found').then(m => m.NotFound),
  },
];
