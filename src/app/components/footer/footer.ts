import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, NgOptimizedImage],
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
