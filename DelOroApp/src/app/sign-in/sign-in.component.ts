import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  contents$: Observable<any> = new Observable<any>;

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.contents$ = this.apiService.getMessage('/about').pipe(take(1))
  }
}
