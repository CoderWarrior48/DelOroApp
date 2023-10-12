import { Component, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import { ApiService } from '../../services/api.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent {
  cards: any
  // cards: {
  //   liked: boolean,
  //   tags: string,
  //   title: string, 
  //   subtitle: string, 
  //   avatar: string,
  //   image: string,
  //   content: string,
  // }[];

  @Input() tab = '';

  cards$: Observable<any> = new Observable<any>;

  constructor(public apiService: ApiService, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.cards$ = this.apiService.getDataFromServer('/newsfeed').pipe(take(1))
  }
  
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }
}
