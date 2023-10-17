import {Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router'
 

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})
export class QuizzesComponent {
  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
  ) {}

  form = this.formBuilder.group({
    name: '',
  });

  onSubmit() {
    // Process checkout data here
    this._router.navigate(['editquiz'])
    // this.form.reset();
  }
}

