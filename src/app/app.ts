import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { Hero } from './components/hero/hero';
import { Whyme } from './components/whyme/whyme';
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
  private readonly router = inject(Router);
  protected readonly title = signal('portfolio');

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  protected readonly isHomePage = computed(() => {
    const url = this.currentUrl();
    // Hauptseite: /, leer, oder mit Fragment (z.B. /#about)
    return url === '/' || url === '' || url.startsWith('/#');
  });
}
