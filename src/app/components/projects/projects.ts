import { ChangeDetectionStrategy, Component, signal, inject, computed } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { ScrollAnimateDirective } from '../../shared/scroll-animate/scroll-animate.directive';
import { Project, TranslatedProject, PROJECTS, TECH_NAMES } from './projects.config';

@Component({
  selector: 'app-projects',
  imports: [TranslocoDirective, ScrollAnimateDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly translocoService = inject(TranslocoService);

  readonly projects = signal<Project[]>(PROJECTS);

  readonly currentProjectIndex = signal(0);

  readonly currentProject = computed<TranslatedProject>(() => {
    const project = this.projects()[this.currentProjectIndex()];
    return {
      ...project,
      translatedName: this.translocoService.translate(project.nameKey) || project.nameKey,
      translatedDuration: this.translocoService.translate(project.durationKey) || project.durationKey,
      translatedSections: project.sections,
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
    };
  });

  readonly formattedTechnologies = computed<string>(() => {
    const technologies = this.projects()[this.currentProjectIndex()].technologies;
    return this.formatTechNames(technologies);
  });

  private formatTechNames(technologies: string[]): string {
    return technologies
      .map((tech) => TECH_NAMES[tech] || tech.replace('.svg', ''))
      .join(', ');
  }

  selectProject(index: number): void {
    this.currentProjectIndex.set(index);
  }
}
