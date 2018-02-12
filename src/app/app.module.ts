import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaximalistTableComponent } from './maximalist-table/maximalist-table.component';


@NgModule({
  declarations: [
    AppComponent,
    MaximalistTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
