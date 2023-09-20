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
    
  
}
