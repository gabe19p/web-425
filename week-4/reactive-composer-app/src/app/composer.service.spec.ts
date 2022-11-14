/**
 * Title: composer.service.spec.ts
 * Author: Danial Purselley
 * Date: 13 Nov 2022
 * Description: basic composer
 * application for web-425
 */

import { TestBed } from '@angular/core/testing';

import { ComposerService } from './composer.service';

describe('ComposerService', () => {
  let service: ComposerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
