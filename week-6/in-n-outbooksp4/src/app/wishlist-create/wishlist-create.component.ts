/**
 * Title: wishlist-create.component.ts
 * Author: Danial Purselley
 * Date: 22 Nov 2022
 * Description: in n out book
 * angular application f/ web-425
 */

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss'],
})
export class WishlistCreateComponent implements OnInit {
  item: IWishListItem;

  @Output() addItemEmitter = new EventEmitter<IWishListItem>();

  constructor() {
    this.item = {} as IWishListItem;
  }

  ngOnInit(): void {}

  addItem() {
    // output this additememitter
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors,
    });
    // setting item object as empty again
    this.item = {} as IWishListItem;
  }
}
