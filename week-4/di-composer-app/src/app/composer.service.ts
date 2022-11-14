/**
 * Title: composer.service.ts
 * Author: Danial Purselley
 * Date: 13 Nov 2022
 * Description: basic composer
 * application for web-425
 */

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root',
})
// inserted from copied class below
export class ComposerService {
  composers: Array<IComposer>;

  constructor() {
    // declaring new composer objects
    this.composers = [
      {
        composerId: 100,
        fullName: 'Aaron Copland',
        genre: 'Jazz',
      },
      {
        composerId: 101,
        fullName: 'Wolfgang Amadeus Mozart',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Alben Berg',
        genre: 'Avant-Garde',
      },
      {
        composerId: 103,
        fullName: 'Joseph Haydn',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'Johann Sebastian Bach',
        genre: 'Classical',
      },
    ];
  }

  getComposers() {
    return this.composers;
  }

  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}

// copied from the composer.class.ts file
export class Composer {}
