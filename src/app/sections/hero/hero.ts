import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Subjecthero } from '../../shared/ui/subjecthero/subjecthero';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, Subjecthero],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
