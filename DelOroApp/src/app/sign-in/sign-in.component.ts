import { Component } from '@angular/core';
import { AuthService } from '../../../../DelOroApp/src/app/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor (_authservice: AuthService) {
  }
}

