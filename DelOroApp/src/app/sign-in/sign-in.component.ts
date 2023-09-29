import { Component } from '@angular/core';
import { AuthService } from '../../../../DelOroApp/src/app/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {


  accountInput: any = {username:'', password:'' }

  constructor (public _authservice: AuthService) {}

}

