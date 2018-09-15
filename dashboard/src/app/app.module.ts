import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DayliCommitsComponent } from './github/dayli-commits/dayli-commits.component';

@NgModule({
  declarations: [
    AppComponent,
    DayliCommitsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
