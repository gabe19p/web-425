/**
 * Title: book.interface.ts
 * Author: Danial Purselley
 * Date: 19 Nov 2022
 * Description: in n out book
 * angular application f/ web-425
 */

export interface IBook {
  isbn: string;
  title: string;
  authors: Array<string>;
  description: string;
  numOfPages: number;
}
