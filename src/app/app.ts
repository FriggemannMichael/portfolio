import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Whyme } from './components/whyme/whyme';
import { NavigationComponent } from './components/navigation/navigation';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { References } from './components/references/references';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Hero,
    Whyme,
    NavigationComponent,
    Skills,
    Projects,
    References,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('portfolio');
}
