import { Component } from '@angular/core';

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.scss']
})
export class FlashcardsComponent {
  showDef = false

  cards = [
    {term:'el libro', definition:'book'},
    {term:'la mochilla', definition:'backpack'},
    {term:'el papel', definition:'paper'},
    {term:'el lápiz', definition:'pencil'},
    {term:'la silla', definition: 'seat'},
    {term:'el mapa', definition:'map'},


  ]

  currentCard = 1
}
