import { Component } from '@angular/core';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent {

  departments = [
    {
      name: 'Math',
      image: '../../assets/images/do-eagle-shield.png'
    },
    {
      name: 'Science',
      image: '../../assets/images/do-logo.svg'
    }
  ]
}
