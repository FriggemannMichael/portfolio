import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectSection {
  title: string;
  description: string;
}

interface Project {
  id: number;
  name: string;
  image: string;
  technologies: string[];
  duration: string;
  sections: ProjectSection[];
  isOngoing?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  readonly projects = signal<Project[]>([
    {
      id: 1,
      name: 'Slack Clone',
      image: 'icon/05-Slack Clone Desktop general view 1.jpg',
      technologies: ['angular.svg', 'ts.svg', 'firebase.svg'],
      duration: '3 months',
      sections: [
        {
          title: 'About the project',
          description: 'A comprehensive Slack clone built with Angular and Firebase, featuring real-time messaging, channel management, and user authentication.',
        },
        {
          title: 'How I have organised my work process',
          description: 'Implemented agile methodology with weekly sprints, used Git for version control, and maintained clean code practices throughout development.',
        },
        {
          title: 'My group work experience',
          description: 'Collaborated with a team of 4 developers, participated in daily standups, code reviews, and pair programming sessions.',
        },
      ],
    },
    {
      id: 2,
      name: 'Project 02',
      image: 'icon/placeholder.jpg',
      technologies: ['angular.svg', 'ts.svg'],
      duration: '2 months',
      sections: [
        {
          title: 'About the project',
          description: 'Description for project 02',
        },
        {
          title: 'How I have organised my work process',
          description: 'Work process description',
        },
        {
          title: 'My group work experience',
          description: 'Group work experience',
        },
      ],
    },
    {
      id: 3,
      name: 'Project 03',
      image: 'icon/placeholder.jpg',
      technologies: ['angular.svg'],
      duration: '1 month',
      sections: [
        {
          title: 'About the project',
          description: 'Description for project 03',
        },
        {
          title: 'How I have organised my work process',
          description: 'Work process description',
        },
        {
          title: 'My group work experience',
          description: 'Group work experience',
        },
      ],
    },
    {
      id: 4,
      name: 'Ongoing project',
      image: 'icon/placeholder.jpg',
      technologies: ['angular.svg', 'ts.svg'],
      duration: 'In progress',
      isOngoing: true,
      sections: [
        {
          title: 'About the project',
          description: 'Currently working on this project',
        },
        {
          title: 'How I have organised my work process',
          description: 'Work process description',
        },
        {
          title: 'My group work experience',
          description: 'Group work experience',
        },
      ],
    },
  ]);

  readonly currentProjectIndex = signal(0);

  selectProject(index: number): void {
    this.currentProjectIndex.set(index);
  }

  get currentProject(): Project {
    return this.projects()[this.currentProjectIndex()];
  }
}
