import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticFormFieldComponent } from './static-form-field.component';

describe('StaticFormFieldComponent', () => {
  let component: StaticFormFieldComponent;
  let fixture: ComponentFixture<StaticFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
