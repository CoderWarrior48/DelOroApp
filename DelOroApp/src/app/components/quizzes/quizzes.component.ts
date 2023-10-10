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

  addField(type:any) { 
    this.fields.push(
      {title:'title', type: type, options: ['1','2']}
      )
  }

  fields = [
    {title:'title', type: 'mc', options: ['1','2']}
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  }
}