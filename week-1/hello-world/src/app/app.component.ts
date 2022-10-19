/**
 * Title: app.component.ts
 * Authors: Danial Purselley
 * Date: 19 Oct 2022
 * Description: ts file for web-425 application
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myWorld = "You are now in Danial's world!";
}
