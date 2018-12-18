import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Validators as AppValidators } from '../../models/validators'
import { CommentModel } from '../../models/comment.model';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  private commentFormGroup: FormGroup;

  @Input()
  private postId :number;

  @Output()
  private addComment = new EventEmitter<CommentModel>();

  constructor() { }

  ngOnInit() {
    this.commentFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      body: new FormControl('', AppValidators.startsWith('AAA'))
    }, (formGroup) => {
      if (formGroup.get('name').value === 'admin' && formGroup.get('body').value.toString().startsWith('AAAb')) {
          return {
            'dependentValidator': true
          };
      }

      return null;
    });
  }

  submitForm() {
    if (this.commentFormGroup.valid) {
      let model : CommentModel = new CommentModel();
      model.postId = this.postId;
      model.body = this.commentFormGroup.value.body;
      model.name = this.commentFormGroup.value.name;
      this.addComment.emit(model);
    }
  }
}
