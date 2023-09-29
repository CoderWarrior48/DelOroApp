import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  contents$: Observable<any> = new Observable<any>;
  isAccount$: Observable<any> = new Observable<any>;


  accountInput = {username:'', password:'' }
  

  constructor(public apiService: ApiService) {
    this.accountInput
  }

  signIn() {
    console.log('searching...')
    //revert to isAccount$ ?????
    this.contents$ = this.apiService.postDataToServer('/search-accounts',this.accountInput).pipe(take(1))
  }


  signUp() {
    console.log('posting...')
    this.contents$ = this.apiService.postDataToServer('/create-account',this.accountInput).pipe(take(1))
    
  }

  // ngOnInit() {
  //   this.accounts$ = this.apiService.getDataFromServer('/accounts').pipe(take(1))
 
}
