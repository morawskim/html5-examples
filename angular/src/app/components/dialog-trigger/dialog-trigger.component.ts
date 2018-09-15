import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { DialogContentComponent } from '../dialog-content/dialog-content.component';

@Component({
  selector: 'app-dialog-trigger',
  templateUrl: './dialog-trigger.component.html',
  styleUrls: ['./dialog-trigger.component.css']
})
export class DialogTriggerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogContentComponent, {
      data: {'something': 'cos'}
    });
  }
}
