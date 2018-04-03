import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service'
import { PostModel } from '../../models/post.model'
import { CommentModel } from '../../models/comment.model'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post : PostModel;
  comments : CommentModel[] = new Array<CommentModel>();

  constructor(private activatedRoute: ActivatedRoute, private service: PostService) { }

  ngOnInit() {
    this.service.getPost(this.activatedRoute.snapshot.params.id)
      .subscribe(res => {
        res = res.json();
        this.post = Object.assign(new PostModel(), res);
      });
  }

  appendComment(value:CommentModel) {
    this.comments.push(value);
  }
}
