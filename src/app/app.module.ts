import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaximalistTableComponent } from './maximalist-table/maximalist-table.component';
import { MaximalistTableService } from './maximalist-table.service';


@NgModule({
  declarations: [
    AppComponent,
    MaximalistTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MaximalistTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
