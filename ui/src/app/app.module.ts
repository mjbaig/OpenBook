import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxWidgetGridModule } from 'ngx-widget-grid/dist';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxWidgetGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
