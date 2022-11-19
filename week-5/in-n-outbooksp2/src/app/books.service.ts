/**
 * Title: books.services.ts
 * Author: Danial Purselley
 * Date: 19 Nov 2022
 * Description: in n out book
 * angular application f/ web-425
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9788869183157',
        title: 'Harry Potter and the Sorcerers Stone',
        description: 'Book 1 of the Harry Potter Series',
        numOfPages: 320,
        authors: ['J. K. Rowling'],
      },
      {
        isbn: '9781338299151',
        title: 'Harry Potter and the Chamber of Secrets',
        description: 'Book 2 of the Harry Potter Series',
        numOfPages: 368,
        authors: ['J. K. Rowling'],
      },
      {
        isbn: '9780439136365',
        title: 'Harry Potter and the Prisoner of Azkaban',
        description: 'Book 3 of the Harry Potter Series',
        numOfPages: 448,
        authors: ['J. K. Rowling'],
      },
      {
        isbn: '9788893819930',
        title: 'Harry Potter and the Goblet of Fire',
        description: 'Book 4 of the Harry Potter Series',
        numOfPages: 636,
        authors: ['J. K. Rowling'],
      },
      {
        isbn: '9780439358064',
        title: 'Harry Potter and the Order of the Phoenix',
        description: 'Book 5 of the Harry Potter Series',
        numOfPages: 900,
        authors: ['J. K. Rowling'],
      },
    ];
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }
}
