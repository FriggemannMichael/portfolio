import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-hover-ellipse',
  imports: [],
  templateUrl: './hover-ellipse.html',
  styleUrl: './hover-ellipse.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class HoverEllipse {
  width = input<number | null>(null);
  height = input<number | null>(null);
  defaultSvg = input.required<string>();
  hoverSvg = input.required<string>();
}
