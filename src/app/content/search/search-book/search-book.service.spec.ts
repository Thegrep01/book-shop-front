import { TestBed } from '@angular/core/testing';

import { SearcBookService } from './search-book.service';

describe('SearcBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearcBookService = TestBed.get(SearcBookService);
    expect(service).toBeTruthy();
  });
});
