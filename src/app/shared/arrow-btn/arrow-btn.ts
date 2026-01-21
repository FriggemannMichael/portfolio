import { Component, ChangeDetectionStrategy, input } from '@angular/core';

type ArrowDirection = 'up' | 'down';

@Component({
  selector: 'app-arrow-btn',
  templateUrl: './arrow-btn.html',
  styleUrls: ['./arrow-btn.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowBtnComponent {
  direction = input<ArrowDirection>('down');
}
