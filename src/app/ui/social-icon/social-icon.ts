import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-social-icon',
  imports: [NgOptimizedImage],
  templateUrl: './social-icon.html',
  styleUrl: './social-icon.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialIcon {
  icon = input.required<'email' | 'github' | 'linkedin'>();
  alt = input.required<string>();
  href = input.required<string>();
  width = input<number>(40);
  height = input<number>(40);
}
