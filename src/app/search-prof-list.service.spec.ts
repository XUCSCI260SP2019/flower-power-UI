import { TestBed } from '@angular/core/testing';

import { SearchProfListService } from './search-prof-list.service';

describe('SearchProfListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchProfListService = TestBed.get(SearchProfListService);
    expect(service).toBeTruthy();
  });
});
