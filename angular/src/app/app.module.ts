import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostDetailsComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'post/:id', component: PostDetailsComponent},
      { path: '**', component: PostsComponent}
    ]),
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
