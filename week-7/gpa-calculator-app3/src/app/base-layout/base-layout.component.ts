/**
 * Title: base-layout.component.ts
 * Author: Danial Purselley
 * Date: 23 Nov 2022
 * Description: Basic gpa calc
 * app f/ web-425
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 7.2 - Reactive Forms';
  }

  ngOnInit(): void {}
}
