import { Component, Input } from '@angular/core';
import { NewsfeedService} from './newsfeed.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent {
  cards$: Observable<any>
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


    constructor (private _newsfeedService: NewsfeedService, private _snackBar: MatSnackBar) {
      this.cards$ = _newsfeedService.cards$;
  
    }
  
    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }
}
