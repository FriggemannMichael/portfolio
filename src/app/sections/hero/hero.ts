import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subjecthero } from '../../shared/ui/subjecthero/subjecthero';
import { Navigtaion } from '../navigtaion/navigtaion';
import { SocialIcon } from '../../ui/social-icon/social-icon';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, Subjecthero, Navigtaion, SocialIcon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
