import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './features/hero/hero';
import { Whyme } from './features/whyme/whyme';
import { NavigationComponent } from './features/navigation/navigation';
import { Skills } from './features/skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Whyme, NavigationComponent, Skills],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
