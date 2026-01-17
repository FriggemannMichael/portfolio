import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Hero } from '../../sections/hero/hero';
import { Navigtaion } from '../../sections/navigtaion/navigtaion';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, Hero, Navigtaion],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
