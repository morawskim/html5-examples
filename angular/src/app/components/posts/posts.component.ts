import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'
import { PostModel } from '../../models/post.model'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostModel[] = [];
  constructor(private service: PostService) { }

  ngOnInit() {
    this.service.posts().subscribe((res) => {
        let posts = res.json();
        this.posts = posts.map(item => Object.assign(new PostModel() , item));
    });
  }

}
