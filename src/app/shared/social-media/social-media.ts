import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-social-media',
  imports: [NgOptimizedImage],
  templateUrl: './social-media.html',
  styleUrl: './social-media.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialMedia {
  emailHover = signal(false);
  githubHover = signal(false);
  linkedinHover = signal(false);

  readonly socialLinks = {
    email: 'mailto:m.friggemann@proton.me',
    github: 'https://github.com/FriggemannMichael',
    linkedin: 'https://www.linkedin.com/in/michael-friggemann-73b569372/',
  };

  setHover(platform: 'email' | 'github' | 'linkedin', isHovered: boolean): void {
    if (platform === 'email') {
      this.emailHover.set(isHovered);
    } else if (platform === 'github') {
      this.githubHover.set(isHovered);
    } else {
      this.linkedinHover.set(isHovered);
    }
  }
}
