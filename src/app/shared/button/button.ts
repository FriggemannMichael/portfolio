import { Component, ChangeDetectionStrategy, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  text = input<string>("Let's talk");
  type = input<'button' | 'submit'>('button');
}
