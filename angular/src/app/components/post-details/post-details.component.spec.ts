import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailsComponent } from './post-details.component';
import {BsCardComponent} from '../bs-card/bs-card.component';
import {CommentFormComponent} from '../comment-form/comment-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {StaticFormFieldComponent} from '../static-form-field/static-form-field.component';
import {InputErrorStateMatcherExample} from '../input-error-state-matcher-example/input-error-state-matcher-example';
import {RouterTestingModule} from '@angular/router/testing';
import {PostService} from '../../services/post.service';
import {Http, HttpModule} from '@angular/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailsComponent, BsCardComponent, CommentFormComponent, StaticFormFieldComponent, InputErrorStateMatcherExample ],
        imports: [HttpClientTestingModule, HttpModule, ReactiveFormsModule, FormsModule, MatInputModule, RouterTestingModule, NoopAnimationsModule],
        providers: [
            PostService,
          ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
