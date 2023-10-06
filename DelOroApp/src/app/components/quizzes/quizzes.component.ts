import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.scss']
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
}