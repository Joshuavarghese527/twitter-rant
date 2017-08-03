import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';


import { RouterModule, Routes } from '@angular/router';
import { TweetsService } from './tweets.service';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetComponent } from './tweet/tweet.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    MainPageComponent,
    TweetListComponent,
    TweetComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, RouterModule.forRoot(appRoutes)
  ],
   providers: [ TweetsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
