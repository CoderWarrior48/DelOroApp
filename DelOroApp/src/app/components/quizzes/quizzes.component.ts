import {Component} from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})
export class QuizzesComponent {
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  form = this.formBuilder.group({
    name: '',
  });

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.form.value);
    this.form.reset();
  }
}

