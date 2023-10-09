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
    this.fields.push({title:'title', type: 'text', placeholder:'placeholder'})
  }

  fields = [
    {title:'title', type: 'text', placeholder:'placeholder'},
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  }
}