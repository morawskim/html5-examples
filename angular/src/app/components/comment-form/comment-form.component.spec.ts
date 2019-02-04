import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFormComponent } from './comment-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {StaticFormFieldComponent} from '../static-form-field/static-form-field.component';
import {InputErrorStateMatcherExample} from '../input-error-state-matcher-example/input-error-state-matcher-example';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('CommentFormComponent', () => {
  let component: CommentFormComponent;
  let fixture: ComponentFixture<CommentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentFormComponent, StaticFormFieldComponent, InputErrorStateMatcherExample ],
        imports: [
            ReactiveFormsModule,
            MatInputModule,
            FormsModule,
            NoopAnimationsModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
