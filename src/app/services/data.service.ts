import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BadInput } from '../common/errors/bad-input';
import { NotFoundError } from '../common/errors/not-found-error';
import { AppError } from '../common/errors/app-error';

@Injectable()
// Reusable http/data service
export class DataService {
  // by prefixing http with private, we are being able to reach http from everywhere inside this class
  constructor(private url: string, private http: Http) {}

  // angular 6 we use the rxjs 6 way of handling errors
  getAll() {
    return this.http.get(this.url).pipe(
      map(response => response.json()),
      catchError(this.handleError)
    );
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource)).pipe(
      map(response => response.json()),
      catchError(this.handleError)
    );
  }

  update(resource) {
    return this.http.patch(`${this.url}/${resource.id}`, JSON.stringify({ isRead: true })).pipe(
      map(response => response.json()),
      catchError(this.handleError)
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      map(response => response.json()),
      catchError(this.handleError)
    );
  }

  // reusable error handling function
  private handleError(error: Response) {
    if (error.status === 400) return throwError(new BadInput(error.json()));
    if (error.status === 404) return throwError(new NotFoundError());
    else return throwError(new AppError(error));
  }
}
