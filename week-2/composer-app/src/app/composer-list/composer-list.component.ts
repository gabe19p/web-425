/**
 * Title: composer-list.component.ts
 * Author: Danial Purselley
 * Date: 30 Oct 2022
 * Description: composer listing angular
 * application f/ web-425
 */

import { Component, OnInit } from '@angular/core';

// self made class to ensure composers follow format
export default class Composer {
  fullName: string;
  genre: string;

  // constructor with specified params
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    // declaring new composer objects
    this.composers = [
      new Composer('Aaron Copland', 'Jazz'),
      new Composer('Wolfgang Amadeus Mozart', 'Classical'),
      new Composer('Alben Berg', 'Avant-Garde'),
      new Composer('Joseph Haydn', 'Classical'),
      new Composer('Johann Sebastian Bach', 'Classical'),
    ];
  }

  ngOnInit(): void {}
}
