import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillEllipse } from '../../shared/skill-ellipse/skill-ellipse';
import { Button } from '../../shared/button/button';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule, SkillEllipse, Button],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
}
