import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {

  public result: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  sendForm() {
    new Promise(function(resolv, reject) {
      setTimeout(resolv, 1500);
    }).then(() => {
      this.result = true;
    }, () => {
      this.result = false;
    });
  }
}
