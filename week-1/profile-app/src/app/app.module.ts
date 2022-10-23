/**
 * Title: app.module.ts
 * Author: Danial Purselley
 * Date: 23 Oct 2022
 * Description: root module file f/
 *   web425 angular application
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';

@NgModule({
  declarations: [AppComponent, MyImageComponent, MyDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
