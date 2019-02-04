import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorStateMatcherExample } from './input-error-state-matcher-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('InputErrorStateMatcherExample', () => {
  let component: InputErrorStateMatcherExample;
  let fixture: ComponentFixture<InputErrorStateMatcherExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputErrorStateMatcherExample ],
        imports: [ReactiveFormsModule, FormsModule, MatInputModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputErrorStateMatcherExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
