/**
 * Title: home.component.ts
 * Author: Danial Purselley
 * Date: 5 Nov 2022
 * Description: basic profile angular
 * application f/ web-425
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(
      this.route.snapshot.queryParamMap.get('isLoggedIn')
    );
  }

  ngOnInit(): void {}
}
