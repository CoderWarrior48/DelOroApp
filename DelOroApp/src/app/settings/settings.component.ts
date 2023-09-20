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
  }

  onSubmit(myForm: NgForm) {
  
    this.settingsObj.darkmode = myForm.value[0]

  }
  stringify(obj: object) {
    return JSON.stringify(obj)
  }
    
  
}
