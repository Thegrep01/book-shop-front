import { TestBed } from '@angular/core/testing';

import { SearcMagazineService } from './search-magazine.service';

describe('SearcMagazineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearcMagazineService = TestBed.get(SearcMagazineService);
    expect(service).toBeTruthy();
  });
});
