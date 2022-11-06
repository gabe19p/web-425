/**
 * Title: app.component.ts
 * Author: Danial Purselley
 * Date: 30 Oct 2022
 * Description: basic profile angular
 * application f/ web-425
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  assignment: string = 'Secure Profile App';
}
