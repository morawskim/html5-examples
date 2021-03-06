import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTriggerComponent } from './dialog-trigger.component';
import {MatDialogModule, MatDialogModule} from '@angular/material';

describe('DialogTriggerComponent', () => {
  let component: DialogTriggerComponent;
  let fixture: ComponentFixture<DialogTriggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTriggerComponent ],
        imports: [MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
