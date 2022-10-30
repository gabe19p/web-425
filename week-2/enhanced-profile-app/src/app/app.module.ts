/**
 * Title: app.module.ts
 * Author: Danial Purselley
 * Date: 30 Oct 2022
 * Description: basic profile angular
 * application f/ web-425
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDetailComponent } from './my-detail/my-detail.component';
import { MyImageComponent } from './my-image/my-image.component';

@NgModule({
  declarations: [AppComponent, MyDetailComponent, MyImageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
