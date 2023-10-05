import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  contents$: Observable<any> = new Observable<any>;
  isAccount$: Observable<any> = new Observable<any>;  

  constructor(public apiService: ApiService) {
  }

  signIn(accountInput: object) {
    console.log('searching...')
    //revert to isAccount$ ?????
    this.contents$ = this.apiService.postDataToServer('/search-accounts',accountInput).pipe(take(1))
  }


  signUp(accountInput: object) {
    console.log('posting...')
    this.contents$ = this.apiService.postDataToServer('/create-account',accountInput).pipe(take(1))
    
  }

  // ngOnInit() {
  //   this.accounts$ = this.apiService.getDataFromServer('/accounts').pipe(take(1))
 
}
