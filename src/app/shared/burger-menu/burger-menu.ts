import { Component, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-burger-menu',
  imports: [CommonModule],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BurgerMenu {
  isOpen = signal(false);
  currentLanguage = signal<'DE' | 'EN'>('DE');

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

  switchLanguage(lang: 'DE' | 'EN') {
    this.currentLanguage.set(lang);
    this.languageChange.emit(lang);
  }
}
