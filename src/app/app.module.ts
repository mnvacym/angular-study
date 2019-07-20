import { RouterModule } from '@angular/router';
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
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    PostsComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // reactive forms
    ReactiveFormsModule,
    // http services
    HttpModule,
    // Router & Navigation
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'signup', component: SignupFormComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent },
    ]),
  ],
  providers: [
    PostService,
    // we tell angular to use AppErrorHandler instead of default ErrorHandler
    { provide: ErrorHandler, useClass: AppErrorHandler },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
