import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { ScrollAnimateDirective } from '../../shared/scroll-animate/scroll-animate.directive';
import { Project, PROJECTS, TECH_NAMES } from './projects.config';

@Component({
  selector: 'app-projects',
  imports: [TranslocoDirective, ScrollAnimateDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  readonly projects = signal<Project[]>(PROJECTS);

  readonly currentProjectIndex = signal(0);

  readonly currentProject = computed<Project>(() => {
    return this.projects()[this.currentProjectIndex()];
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
