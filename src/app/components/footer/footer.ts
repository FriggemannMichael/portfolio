import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslocoDirective } from '@jsverse/transloco';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage, TranslocoDirective],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly currentYear = new Date().getFullYear();

  readonly socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/claudiafohrer',
      icon: 'mobil/Githubbutton.svg',
      hoverIcon: 'mobil/Githubbuttonhover.svg',
    },
    {
      name: 'Email',
      url: 'mailto:contact@claudiafohrer.de',
      icon: 'mobil/Mail.svg',
      hoverIcon: 'mobil/mailhover.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/claudiafohrer',
      icon: 'mobil/Linkedinbutton.svg',
      hoverIcon: 'mobil/linkdinhover.svg',
    },
  ];
}
