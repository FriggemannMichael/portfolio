import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Hero } from '../../sections/hero/hero';
import { Skills } from '../../sections/skills/skills';
import { Projects } from '../../sections/projects/projects';
import { References } from '../../sections/references/references';
import { Contact } from '../../sections/contact/contact';
import { Footer } from '../../sections/footer/footer';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, Hero, Skills, Projects, References, Contact, Footer],
  templateUrl: './layout.html',
  styleUrls: ['./layout.scss'],
})
export class Layout {}
