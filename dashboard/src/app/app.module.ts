import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { DisplayComponent } from './layout/display/display.component';
import { EditComponent } from './layout/edit/edit.component';

import { EditMode } from './services/edit-mode.service';
import { WidgetsService } from './services/widgets.services';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    DisplayComponent,
    EditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EditMode,
    WidgetsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
