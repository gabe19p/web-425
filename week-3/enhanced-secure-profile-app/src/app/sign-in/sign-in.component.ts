/**
 * Title: sign-in.component.ts
 * Author: Danial Purselley
 * Date: 5 Nov 2022
 * Description: basic profile angular
 * application f/ web-425
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // change boolean to true when user clicks login
  signin() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn },
      skipLocationChange: true,
    });
  }
}
