import { Injectable } from '@angular/core';
import  { Cards }  from './newsfeed.cards';


@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {
  cards = Cards


  constructor() { }
}
