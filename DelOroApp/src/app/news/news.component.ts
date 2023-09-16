import { Component, ContentChild } from '@angular/core';
import { NewsService} from './news.service';
import {MatSnackBar} from '@angular/material/snack-bar'



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {

  cards: {
    liked: boolean,
    tags: string,
    title: string, 
    subtitle: string, 
    avatar: string,
    image: string,
    content: string,
  }[];

  tabs = [
    "All",
    "Academic",
    "Extracurricular",
  ]

  constructor (private _newsService: NewsService, private _snackBar: MatSnackBar) {
    this.cards = _newsService.cards;

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
