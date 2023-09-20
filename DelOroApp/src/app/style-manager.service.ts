import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class StyleManagerComponent {
  isDark = false;

  static readonly darkStyleName = 'darkMode';

  constructor() {}

  public toggleDarkTheme() {
    if (this.isDark) {
      document.body.classList.remove(StyleManagerComponent.darkStyleName); // Remove darkMode
      this.isDark = false;
    } else {
      document.body.classList.add(StyleManagerComponent.darkStyleName); // Add darkMode
      this.isDark = true;
    }
  }
}