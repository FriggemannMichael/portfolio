import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  skills = signal<Skill[]>([
    { name: 'Angular', icon: 'angular.svg' },
    { name: 'TypeScript', icon: 'ts..svg' },
    { name: 'JavaScript', icon: 'js.svg' },
    { name: 'HTML', icon: 'html.svg' },
    { name: 'CSS', icon: 'css.svg' },
    { name: 'Rest-Api', icon: 'restapi.svg' },
    { name: 'Firebase', icon: 'fire.svg' },
    { name: 'GIT', icon: 'git.svg' },
    { name: 'Material Design', icon: 'md.svg' },
    { name: 'Scrum', icon: 'scrum.svg' },
  ]);

  learningSkills = signal<Skill[]>([
    { name: 'React', icon: 'react.svg' },
    { name: 'Vue Js', icon: 'vue.svg' },
  ]);

  isLearningHovered = signal(false);
}
