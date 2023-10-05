import { Component } from '@angular/core';
import { HostListener } from '@angular/core';


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
  editMode = false
  key: any = ''

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) { 
    this.key = event.key;
    switch (event.key) {
      case ' ':
        if (this.editMode == false){this.showDef = !this.showDef}
        break
  
      case 'ArrowRight':
        if (this.currentCard != this.cards.length){this.currentCard= this.currentCard + 1}
        break

      case 'ArrowLeft':
        if (this.currentCard != 1) {this.currentCard = this.currentCard - 1}
        break
    } 
  }
}
