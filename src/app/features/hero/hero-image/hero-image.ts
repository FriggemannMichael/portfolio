import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero-image',
  templateUrl: './hero-image.html',
  styleUrls: ['./hero-image.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroImageComponent {}
