import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { NewsFeedService } from '../news-feed.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  refreshTimer$ = timer(0, 30000);

  news$:any = this.newsfeed.news$;

  // news$: Observable<News[]> = this.newsfess.news$;
  constructor(private newsfeed: NewsFeedService) {}
  ngOnInit() {
    this.subscription = this.refreshTimer$.subscribe(this.newsfeed.refresh$);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
