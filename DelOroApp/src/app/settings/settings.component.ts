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
    subscribe: true,
    other: false,
  }

  onSubmit(myForm: NgForm) {
  
    this.settingsObj.darkmode = myForm.value['darkmode']
    this.settingsObj.notifications = myForm.value['notifications']
    this.settingsObj.subscribe = myForm.value['subscribe']
    this.settingsObj.other = myForm.value['other']
    this.toggleDarkTheme(this.settingsObj.darkmode)
  }
  stringify(obj: object) {
    return JSON.stringify(obj)
  }

  toggleDarkTheme(isDark: boolean) {
    if (isDark) {
      document.body.classList.remove('lightMode'); // Remove lightMode
      document.body.classList.add('darkMode'); // add darkMode
    } else {
      document.body.classList.remove('darkMode'); // Remove darkMode
      document.body.classList.add('lightMode'); // add lightMode
    }
  }
  
}
