import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {

  postReturn$: Observable<any> = new Observable<any>;
  usernameInput: string
  passwordInput: string
  postReturn: any

  

  constructor(public apiService: ApiService) {
   this.usernameInput = ''
   this.passwordInput = ''
  }
  signIn() {
    console.log('posting...')
    this.postReturn$ = this.apiService.postDataToServer().pipe(take(1))
  }

  // ngOnInit() {
  //   this.accounts$ = this.apiService.getDataFromServer('/accounts').pipe(take(1))
  // }
}
