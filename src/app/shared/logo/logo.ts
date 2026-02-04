import { Component, ChangeDetectionStrategy, input, computed } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './logo.html',
  styleUrl: './logo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Logo {
  /** 'light' = 1_logo.svg (default), 'dark' = 2_logo.svg */
  variant = input<'light' | 'dark'>('light');
  /** Set to true for above-the-fold logos (LCP optimization) */
  priority = input(false);

  logoSrc = computed(() => this.variant() === 'dark' ? '/img/2_logo.svg' : '/img/1_logo.svg');
}
