import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  
  s: AccountService
  constructor (_accountService : AccountService){
    this.s = _accountService
  }
}
