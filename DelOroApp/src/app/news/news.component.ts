import { Component, ContentChild } from '@angular/core';
import { NewsService} from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  cards: {
    tag: string,
    title: string, 
    subtitle: string, 
    avatar: string,
    image: string,
    content: string,
  }[];

  constructor (private _newsService: NewsService) {
    this.cards = _newsService.cards;

  }
}
