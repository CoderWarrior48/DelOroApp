import { Component } from '@angular/core';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent {

  departments = [
    {
      name: 'CTE',
      image: '../../assets/images/do-eagle-shield.png'
    },
    {
      name: 'English',
      image: '../../assets/images/do-logo.svg'
    },
    {
      name: 'Fine Arts',
      image: '../../assets/images/do-logo.svg'
    },
    {
      name: 'Math',
      image: '../../assets/images/do-logo.svg'
    },
    {
      name: 'PE',
      image: '../../assets/images/do-logo.svg'
    },
    {
      name: 'People Services',
      image: '../../assets/images/do-logo.svg'
    },
    {
      name: 'Social Science',
      image: '../../assets/images/do-logo.svg'
    },
    {
      name: 'World Languages',
      image: '../../assets/images/do-logo.svg'
    },
    {
      name: 'Learning Commons',
      image: '../../assets/images/do-logo.svg'
    },
  ]
}
