import { ChangeDetectionStrategy, Component, signal, inject, computed } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { ScrollAnimateDirective } from '../../shared/scroll-animate/scroll-animate.directive';

interface ProjectSection {
  titleKey: string;
  descriptionKey: string;
}

interface Project {
  id: number;
  nameKey: string;
  image: string;
  technologies: string[];
  durationKey: string;
  sections: ProjectSection[];
  liveUrl: string;
  githubUrl: string;
  isOngoing?: boolean;
}

interface TranslatedProject extends Project {
  translatedName: string;
  translatedDuration: string;
  translatedSections: ProjectSection[];
}

@Component({
  selector: 'app-projects',
  imports: [TranslocoDirective, ScrollAnimateDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly translocoService = inject(TranslocoService);

  readonly projects = signal<Project[]>([
    {
      id: 1,
      nameKey: 'projects.items.dabubble.name',
      image: 'img/join.png',
      technologies: ['angular.svg', 'ts..svg', 'fire.svg'],
      durationKey: 'projects.durations.threeWeeks',
      liveUrl: 'https://dabubble.example.com',
      githubUrl: 'https://github.com/username/dabubble',
      sections: [
        { titleKey: 'projects.sections.about', descriptionKey: 'projects.items.dabubble.about' },
        {
          titleKey: 'projects.sections.workProcess',
          descriptionKey: 'projects.items.dabubble.workProcess',
        },
        {
          titleKey: 'projects.sections.groupWork',
          descriptionKey: 'projects.items.dabubble.groupWork',
        },
      ],
    },
    {
      id: 2,
      nameKey: 'projects.items.sharkie.name',
      image: 'img/ellpollo.png',
      technologies: ['html.svg', 'css.svg', 'js.svg'],
      durationKey: 'projects.durations.twoWeeks',
      liveUrl: 'https://sharkie.example.com',
      githubUrl: 'https://github.com/username/sharkie',
      sections: [
        { titleKey: 'projects.sections.about', descriptionKey: 'projects.items.sharkie.about' },
        {
          titleKey: 'projects.sections.workProcess',
          descriptionKey: 'projects.items.sharkie.workProcess',
        },
        {
          titleKey: 'projects.sections.groupWork',
          descriptionKey: 'projects.items.sharkie.groupWork',
        },
      ],
    },
    {
      id: 3,
      nameKey: 'projects.items.join.name',
      image: 'img/join.png',
      technologies: ['html.svg', 'css.svg', 'js.svg', 'fire.svg'],
      durationKey: 'projects.durations.fiveWeeks',
      liveUrl: 'https://join.example.com',
      githubUrl: 'https://github.com/username/join',
      sections: [
        { titleKey: 'projects.sections.about', descriptionKey: 'projects.items.join.about' },
        {
          titleKey: 'projects.sections.workProcess',
          descriptionKey: 'projects.items.join.workProcess',
        },
        {
          titleKey: 'projects.sections.groupWork',
          descriptionKey: 'projects.items.join.groupWork',
        },
      ],
    },
    {
      id: 4,
      nameKey: 'projects.items.ongoing.name',
      image: 'img/pokedex.png',
      technologies: ['angular.svg', 'ts..svg'],
      durationKey: 'projects.durations.inProgress',
      liveUrl: '#',
      githubUrl: 'https://github.com/username/ongoing-project',
      isOngoing: true,
      sections: [
        { titleKey: 'projects.sections.about', descriptionKey: 'projects.items.ongoing.about' },
        {
          titleKey: 'projects.sections.workProcess',
          descriptionKey: 'projects.items.ongoing.workProcess',
        },
        {
          titleKey: 'projects.sections.groupWork',
          descriptionKey: 'projects.items.ongoing.groupWork',
        },
      ],
    },
  ]);

  readonly currentProjectIndex = signal(0);

  readonly currentProject = computed<TranslatedProject>(() => {
    const project = this.projects()[this.currentProjectIndex()];
    return {
      ...project,
      translatedName: this.translocoService.translate(project.nameKey),
      translatedDuration: this.translocoService.translate(project.durationKey),
      translatedSections: project.sections,
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
    };
  });

  readonly formattedTechnologies = computed<string>(() => {
    const techNames: Record<string, string> = {
      'angular.svg': 'Angular',
      'ts.svg': 'TypeScript',
      'firebase.svg': 'Firebase',
      'html.svg': 'HTML',
      'css.svg': 'CSS',
      'js.svg': 'JavaScript',
      'fire.svg': 'Firebase',
      'ts..svg': 'TypeScript',
    };

    return this.projects()
      [this.currentProjectIndex()].technologies.map(
        (tech) => techNames[tech] || tech.replace('.svg', ''),
      )
      .join(', ');
  });

  selectProject(index: number): void {
    this.currentProjectIndex.set(index);
  }
}
