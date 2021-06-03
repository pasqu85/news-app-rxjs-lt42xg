import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { catchError, exhaustMap, map, share } from 'rxjs/operators';

@Injectable()
export class NewsFeedService {

  loadNews$ = this.http
    .get(
      `http://api.mediastack.com/v1/news?access_key=3993f3285315ab2ffd0d19308f62c12a`
    )
    .pipe(
      catchError(err => {
        console.log('error loading news feed');
        console.log(err);
        return EMPTY;
      }),
      share()
    );

  refresh$ = new BehaviorSubject(null);

  news$ = this.refresh$.pipe(exhaustMap(() => this.loadNews$));

  constructor(private http: HttpClient) {}
}
