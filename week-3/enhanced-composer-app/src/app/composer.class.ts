/**
 * Title: composer.class.ts
 * Author: Danial Purselley
 * Date: 1 Nov 2022
 * Description: basic composer
 * application for web-425
 */

// self made class to ensure composers follow format
import { IComposer } from './composer.interface';

export class Composer {
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
