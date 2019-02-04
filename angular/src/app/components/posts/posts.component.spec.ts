import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import {DialogTriggerComponent} from '../dialog-trigger/dialog-trigger.component';
import {RouterTestingModule} from '@angular/router/testing';
import {PostService} from '../../services/post.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpModule} from '@angular/http';
import {MatDialogModule} from '@angular/material';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent, DialogTriggerComponent ],
        imports: [RouterTestingModule, HttpClientTestingModule, HttpModule, MatDialogModule],
        providers: [
            PostService,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
