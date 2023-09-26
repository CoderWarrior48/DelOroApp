import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, pipe, take } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  pages: any;
  messages$: Observable<any> = new Observable<any>;
  constructor(public apiService: ApiService) {}
  ngOnInit() {
    this.messages$ = this.apiService.getMessage().pipe(
      take(1)
    ) //.subscribe(data => { this.pages = data;});
  }
}
