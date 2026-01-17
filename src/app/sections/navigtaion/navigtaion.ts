import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { skills } from '../skills/skills';
import { References } from '../references/references';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-navigtaion',
  imports: [CommonModule, skills, References, Projects, Contact, Footer],
  templateUrl: './navigtaion.html',
  styleUrl: './navigtaion.scss',
})
export class Navigtaion {}
