import { signal } from '@angular/core';

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

describe('Projects Logic', () => {
  const projects = signal<Project[]>([
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
        { titleKey: 'projects.sections.workProcess', descriptionKey: 'projects.items.dabubble.workProcess' },
        { titleKey: 'projects.sections.groupWork', descriptionKey: 'projects.items.dabubble.groupWork' },
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
        { titleKey: 'projects.sections.workProcess', descriptionKey: 'projects.items.sharkie.workProcess' },
        { titleKey: 'projects.sections.groupWork', descriptionKey: 'projects.items.sharkie.groupWork' },
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
        { titleKey: 'projects.sections.workProcess', descriptionKey: 'projects.items.join.workProcess' },
        { titleKey: 'projects.sections.groupWork', descriptionKey: 'projects.items.join.groupWork' },
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
        { titleKey: 'projects.sections.workProcess', descriptionKey: 'projects.items.ongoing.workProcess' },
        { titleKey: 'projects.sections.groupWork', descriptionKey: 'projects.items.ongoing.groupWork' },
      ],
    },
  ]);

  const currentProjectIndex = signal(0);

  const selectProject = (index: number) => {
    currentProjectIndex.set(index);
  };

  beforeEach(() => {
    currentProjectIndex.set(0);
  });

  it('should have 4 projects', () => {
    expect(projects().length).toBe(4);
  });

  it('should have currentProjectIndex initialized to 0', () => {
    expect(currentProjectIndex()).toBe(0);
  });

  it('should select project via selectProject', () => {
    selectProject(2);
    expect(currentProjectIndex()).toBe(2);
  });

  it('should have sections for each project', () => {
    projects().forEach((project) => {
      expect(project.sections.length).toBe(3);
    });
  });

  it('should have liveUrl and githubUrl for each project', () => {
    projects().forEach((project) => {
      expect(project.liveUrl).toBeTruthy();
      expect(project.githubUrl).toBeTruthy();
    });
  });

  it('should mark ongoing project correctly', () => {
    const ongoingProject = projects().find((p) => p.isOngoing);
    expect(ongoingProject).toBeTruthy();
    expect(ongoingProject?.nameKey).toBe('projects.items.ongoing.name');
  });

  it('should have project with id 1 as first project', () => {
    expect(projects()[0].id).toBe(1);
  });

  it('should have technologies array for each project', () => {
    projects().forEach((project) => {
      expect(Array.isArray(project.technologies)).toBe(true);
      expect(project.technologies.length).toBeGreaterThan(0);
    });
  });

  it('should get correct project after selection', () => {
    selectProject(1);
    expect(projects()[currentProjectIndex()].nameKey).toBe('projects.items.sharkie.name');
  });
});
