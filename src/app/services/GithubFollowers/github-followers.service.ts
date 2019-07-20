import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from '../data.service';

@Injectable({
  providedIn: 'root',
})
export class GithubFollowersService extends DataService {
  constructor(http: Http) {
    super('https://api.github.com/users/ammarvehbi/followers', http);
  }
}
