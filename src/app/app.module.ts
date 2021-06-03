import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { NewsFeedService } from './news-feed.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, LatestNewsComponent],
  bootstrap: [AppComponent],
  providers: [NewsFeedService]
})
export class AppModule {}
