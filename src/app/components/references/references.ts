import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HoverEllipse } from '../../shared/hover-ellipse/hover-ellipse';
import { TranslocoDirective } from '@jsverse/transloco';
import { ScrollAnimateDirective } from '../../shared/scroll-animate/scroll-animate.directive';

interface Reference {
  id: number;
  nameKey: string;
  projectKey: string;
  quoteKey: string;
  linkedInUrl: string;
}

@Component({
  selector: 'app-references',
  imports: [HoverEllipse, TranslocoDirective, ScrollAnimateDirective],
  templateUrl: './references.html',
  styleUrl: './references.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class References {
  readonly references = signal<Reference[]>([
    {
      id: 1,
      nameKey: 'references.items.sahraMueller.name',
      projectKey: 'references.items.sahraMueller.project',
      quoteKey: 'references.items.sahraMueller.quote',
      linkedInUrl: '#',
    },
    {
      id: 2,
      nameKey: 'references.items.jamesRugman.name',
      projectKey: 'references.items.jamesRugman.project',
      quoteKey: 'references.items.jamesRugman.quote',
      linkedInUrl: '#',
    },
    {
      id: 3,
      nameKey: 'references.items.evelynMarx.name',
      projectKey: 'references.items.evelynMarx.project',
      quoteKey: 'references.items.evelynMarx.quote',
      linkedInUrl: '#',
    },
  ]);
}
