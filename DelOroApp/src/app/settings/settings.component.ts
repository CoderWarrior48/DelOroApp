import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  
  settingsObj = {
    darkmode: true,
    notifications: true,
    suscribe: true,
    other: false,
  }

  onSubmit(myForm: NgForm) {
  
    this.settingsObj.darkmode = (myForm.value['darkmode'] == true) ? true : false
    this.settingsObj.notifications = (myForm.value['notifications']) ? true : false


  }
  stringify(obj: object) {
    return JSON.stringify(obj)
  }

  isDark = true;

  static readonly darkStyleName = 'darkMode';
    
  public toggleDarkTheme() {
    if (this.isDark) {
      document.body.classList.remove('darkMode'); // Remove darkMode
      document.body.classList.add('lightMode'); // add lightMode

      this.isDark = false;
    } else {
      document.body.classList.remove('lightMode'); // Remove lightMode
      document.body.classList.add('darkMode'); // add darkMode
      this.isDark = true;
    }
  }
  
}
