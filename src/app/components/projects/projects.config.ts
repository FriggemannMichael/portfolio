export interface ProjectSection {
  titleKey: string;
  descriptionKey: string;
}

export interface Project {
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

export interface TranslatedProject extends Project {
  translatedName: string;
  translatedDuration: string;
  translatedSections: ProjectSection[];
}

export const TECH_NAMES: Record<string, string> = {
  'angular.svg': 'Angular',
  'ts.svg': 'TypeScript',
  'firebase.svg': 'Firebase',
  'html.svg': 'HTML',
  'css.svg': 'CSS',
  'js.svg': 'JavaScript',
  'fire.svg': 'Firebase',
  'ts..svg': 'TypeScript',
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    nameKey: 'projects.items.join.name',
    image: 'img/join.png',
    technologies: ['angular.svg', 'ts..svg', 'fire.svg'],
    durationKey: 'projects.durations.threeWeeks',
    liveUrl: 'https://join.friggemann.eu',
    githubUrl: 'https://github.com/FriggemannMichael/join_mpa',
    sections: [
      { titleKey: 'projects.sections.about', descriptionKey: 'projects.items.join.about' },
      {
        titleKey: 'projects.sections.workProcess',
        descriptionKey: 'projects.items.join.workProcess',
      },
      { titleKey: 'projects.sections.groupWork', descriptionKey: 'projects.items.join.groupWork' },
    ],
  },
  {
    id: 2,
    nameKey: 'projects.items.pokedex.name',
    image: 'img/pokedex.png',
    technologies: ['html.svg', 'css.svg', 'js.svg'],
    durationKey: 'projects.durations.twoWeeks',
    liveUrl: 'https://pokedex.friggemann.eu',
    githubUrl: 'https://github.com/FriggemannMichael/pokedex',
    sections: [
      { titleKey: 'projects.sections.about', descriptionKey: 'projects.items.pokedex.about' },
      {
        titleKey: 'projects.sections.workProcess',
        descriptionKey: 'projects.items.pokedex.workProcess',
      },
      {
        titleKey: 'projects.sections.groupWork',
        descriptionKey: 'projects.items.pokedex.groupWork',
      },
    ],
  },
  {
    id: 3,
    nameKey: 'projects.items.elpolloloco.name',
    image: 'img/ellpollo.png',
    technologies: ['html.svg', 'css.svg', 'js.svg'],
    durationKey: 'projects.durations.threeWeeks',
    liveUrl: 'https://elpollo.friggemann.eu',
    githubUrl: 'https://github.com/FriggemannMichael/ElPolloLoco',
    sections: [
      { titleKey: 'projects.sections.about', descriptionKey: 'projects.items.elpolloloco.about' },
      {
        titleKey: 'projects.sections.workProcess',
        descriptionKey: 'projects.items.elpolloloco.workProcess',
      },
      {
        titleKey: 'projects.sections.groupWork',
        descriptionKey: 'projects.items.elpolloloco.groupWork',
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
    githubUrl: '#',
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
];
