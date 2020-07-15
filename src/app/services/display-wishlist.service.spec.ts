import { TestBed } from '@angular/core/testing';

import { DisplayWishlistService } from './display-wishlist.service';

describe('DisplayWishlistService', () => {
  let service: DisplayWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
