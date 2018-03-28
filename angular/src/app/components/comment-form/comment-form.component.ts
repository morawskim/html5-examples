import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validators as AppValidators } from '../../models/validators'

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  private commentFormGroup: FormGroup;

  constructor() { }

  ngOnInit() {
    this.commentFormGroup = new FormGroup({
      nick: new FormControl('', Validators.required),
      comment: new FormControl('', AppValidators.startsWith('AAA'))
    });
  }

}
