import { BadInput } from './../../common/errors/bad-input';
import { NotFoundError } from '../../common/errors/not-found-error';
import { AppError } from '../../common/errors/app-error';
import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll().subscribe(posts => (this.posts = posts));
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    // optimistic update
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post).subscribe(
      newPost => {
        newPost['id'] = newPost.id;
      },
      (error: AppError) => {
        // optimistic update
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError)
        } else throw error;
      }
    );
  }

  updatePost(post: { id: number }) {
    this.service.update(post.id).subscribe(updatedPost => {
      console.log(updatedPost);
    });
  }

  deletePost(post: { id: number }) {
    // optimistic update
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe(null, (error: AppError) => {
      // optimistic update
      this.posts.splice(index, 0, post);

      if (error instanceof NotFoundError) {
        alert('This post has already been deleted');
      } else throw error;
    });
  }
}
