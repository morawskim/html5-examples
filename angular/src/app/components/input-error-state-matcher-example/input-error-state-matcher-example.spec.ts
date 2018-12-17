import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputErrorStateMatcherExample } from './input-error-state-matcher-example';

describe('InputErrorStateMatcherExample', () => {
  let component: InputErrorStateMatcherExample;
  let fixture: ComponentFixture<InputErrorStateMatcherExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputErrorStateMatcherExample ]
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
