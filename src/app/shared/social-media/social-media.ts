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
    email: 'mailto:deine-email@example.com',
    github: 'https://github.com/dein-username',
    linkedin: 'https://linkedin.com/in/dein-profil',
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
