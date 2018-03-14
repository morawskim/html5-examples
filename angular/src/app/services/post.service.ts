import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PostService {
  apiRoot: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: Http) { }

  posts() {
    return this.http.get(this.apiRoot + '/posts');
  }
}
