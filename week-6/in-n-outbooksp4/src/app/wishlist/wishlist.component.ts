/**
 * Title: wishlist.component.ts
 * Author: Danial Purselley
 * Date: 23 Nov 2022
 * Description: in n out book
 * angular application f/ web-425
 */

import { Component, OnInit } from '@angular/core';
import { IWishListItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  items: Array<IWishListItem> = [];

  constructor() {}

  ngOnInit(): void {}

  updateItemsHandler(item: IWishListItem) {
    this.items.push(item);
  }
}
