import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post.service';
import { AppConfigurationService } from './services/app-configuration.service'
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

const appConfigFactory = (configService :AppConfigurationService) => {
  return () => {
    return configService.load();
  }
}

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
  providers: [
    PostService,
    AppConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigFactory,
      multi: true,
      deps: [AppConfigurationService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
