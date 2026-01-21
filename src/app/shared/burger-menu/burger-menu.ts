import { Component, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-burger-menu',
  imports: [CommonModule, LanguageSwitcherComponent],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerMenu {
  isOpen = signal(false);

  navigate = output<string>();
  languageChange = output<'DE' | 'EN'>();
  menuToggle = output<boolean>();
  close = output<void>();

  toggleMenu() {
    this.isOpen.update((value) => !value);
    this.menuToggle.emit(this.isOpen());
    if (!this.isOpen()) {
      this.close.emit();
    }
  }

  onNavigate(section: string) {
    this.navigate.emit(section);
    this.isOpen.set(false);
    this.menuToggle.emit(false);
    this.close.emit();
  }

  onLanguageChange(lang: 'DE' | 'EN') {
    this.languageChange.emit(lang);
  }
}
