import { TestBed, inject } from '@angular/core/testing';

import { PostService } from './post.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpModule} from '@angular/http';

describe('PostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService],
        imports: [HttpClientTestingModule, HttpModule]
    });
  });

  it('should be created', inject([PostService], (service: PostService) => {
    expect(service).toBeTruthy();
  }));
});
