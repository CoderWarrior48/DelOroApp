import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss'],
})
export class QuizzesComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(FormEditor);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'form-editor',
  templateUrl: './form-editor.html',
  styleUrls: ['./form-editor.scss'],
})
export class FormEditor {

  addField() { 
  }

  fields = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker',
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  }
}