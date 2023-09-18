import { Component, ContentChild } from '@angular/core';
import { NewsfeedComponent} from '../newsfeed/newsfeed.component';
import {MatSnackBar} from '@angular/material/snack-bar'



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {


  tabs = [
    "All",
    "Academic",
    "Extracurricular",
  ]
}
