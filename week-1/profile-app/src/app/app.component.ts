/**
 * Title: app.component.ts
 * Author: Danial Purselley
 * Date: 23 Oct 2022
 * Description: root component file f/
 *   web425 angular application
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  assignment: string = 'Assignment 1.5 - Components';
}
