import { Component } from '@angular/core';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent {
  showDef = false

  cards = [
    {term:'libro', definition:'book'},
    {term:'mochilla', definition:'backpack'}
  ]

  currentCard = 1
}
