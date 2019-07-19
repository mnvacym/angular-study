import { BadInput } from './../../common/errors/bad-input';
import { NotFoundError } from '../../common/errors/not-found-error';
import { AppError } from '../../common/errors/app-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../data.service';

@Injectable()
export class PostService extends DataService {
  constructor(http: Http) {
    super('https://jsonplaceholder.typicode.com/posts', http);
  }
}
 