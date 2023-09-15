import { Injectable } from '@angular/core';
import  { Cards }  from './news.cards';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  cards = Cards

  constructor() {}
}
