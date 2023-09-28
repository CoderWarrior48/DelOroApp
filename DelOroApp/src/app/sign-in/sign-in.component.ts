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

  accountInput = {username:'', password:'' }
  

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.contents$ = this.apiService.getDataFromServer('/resources').pipe(take(1))
  }


  signIn() {
    console.log('posting...')
    this.contents$ = this.apiService.postDataToServer('/create-account',this.accountInput).pipe(take(1))
  }

  // ngOnInit() {
  //   this.accounts$ = this.apiService.getDataFromServer('/accounts').pipe(take(1))
  // }
}
