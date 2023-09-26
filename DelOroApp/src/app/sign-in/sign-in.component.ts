import { Component } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  pages: any;
  constructor(public apiService: ApiService) { };
  ngOnInit() {
      this.apiService.getMessage().subscribe(data => {
          this.pages = data;
      });
  }
  
}
