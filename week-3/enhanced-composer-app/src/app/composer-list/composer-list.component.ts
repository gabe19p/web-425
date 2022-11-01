/**
 * Title: composer-list.component.ts
 * Author: Danial Purselley
 * Date: 30 Oct 2022
 * Description: composer listing angular
 * application f/ web-425
 */

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {}
}
