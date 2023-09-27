import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  accounts$: Observable<any> = new Observable<any>;
  usernameInput: string
  passwordInput: string
  

  constructor(public apiService: ApiService) {
   this.usernameInput = ''
   this.passwordInput = ''
  }
  signIn() {
    // if (this.usernameInput in )
  }

  ngOnInit() {
    this.accounts$ = this.apiService.getDataFromServer('/accounts').pipe(take(1))
  }
}
