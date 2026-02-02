import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage, RouterLink, TranslocoDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly currentYear = new Date().getFullYear();

  readonly socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/FriggemannMichael',
      icon: 'mobil/Githubbutton.svg',
      hoverIcon: 'mobil/Githubbuttonhover.svg',
    },
    {
      name: 'Email',
      url: 'mailto:m.friggemann@proton.me',
      icon: 'mobil/Mail.svg',
      hoverIcon: 'mobil/mailhover.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/michael-friggemann-73b569372/',
      icon: 'mobil/Linkedinbutton.svg',
      hoverIcon: 'mobil/linkdinhover.svg',
    },
  ];
}
