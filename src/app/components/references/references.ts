import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HoverEllipse } from '../../shared/hover-ellipse/hover-ellipse';

interface Reference {
  id: number;
  name: string;
  project: string;
  quote: string;
  linkedInUrl: string;
}

@Component({
  selector: 'app-references',
  imports: [HoverEllipse],
  templateUrl: './references.html',
  styleUrl: './references.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class References {
  readonly references = signal<Reference[]>([
    {
      id: 1,
      name: 'Sahra Mueller',
      project: 'Project DA Bubble',
      quote:
        'Claudia had to develop, format and deliver content in collaboration with the team members. She is a reliable and friendly person.',
      linkedInUrl: '#',
    },
    {
      id: 2,
      name: 'James Rugman',
      project: 'Project Join',
      quote:
        'Claudia is a reliable and friendly person. Works in a structured way and write a clear code. I recommend her as a colleague.',
      linkedInUrl: '#',
    },
    {
      id: 3,
      name: 'Evelyn Marx',
      project: 'Project Sharkie',
      quote:
        'She is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.',
      linkedInUrl: '#',
    },
  ]);
}
