import { Component } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-study',
  templateUrl: './study.component.html',
  styleUrls: ['./study.component.scss']
})
export class StudyComponent {

constructor(public router:Router){}

}
