/**
 * Title: my-detail.component.ts
 * Author: Danial Purselley
 * Date: 26 Oct 2022
 * Description: detail component file f/
 *   web425 angular application
 */

import { Component, OnInit } from '@angular/core';

// creating person class for myself
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = ['#TypeScript', '#2022', '#CodingWithAngular', '#ngOmaha'];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  // console out to verify person values
  toString() {
    console.log(
      `\n  Full name: ${this.fullName}\n  Favorite Food: ${this.favoriteFood}\n  Favorite Color: ${this.favoriteColor}`
    );
  }
}

@Component({
  selector: 'app-my-detail',
  templateUrl: './my-detail.component.html',
  styleUrls: ['./my-detail.component.css'],
})
export class MyDetailComponent implements OnInit {
  myProfile: Person;

  // building person
  constructor() {
    this.myProfile = new Person('Danial Purselley', 'Ramen', 'Blue');
    this.myProfile.toString();
  }

  ngOnInit(): void {}
}
