/**
 * Title: app.module.ts
 * Authors: Danial Purselley
 * Date: 19 Oct 2022
 * Description: ts modules for web-425 application
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
