import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from './components/signup/signup-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostService } from './services/post/post.service';
import { AppErrorHandler } from './common/errors/app-error-handler';

@NgModule({
  declarations: [AppComponent, SignupFormComponent, PostsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // reactive forms
    ReactiveFormsModule,
    // http services
    HttpModule,
  ],
  providers: [
    PostService,
    // we tell angular to use AppErrorHandler instead of default ErrorHandler
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
