import { TestBed } from '@angular/core/testing';

import { HomeProfService } from './home-prof.service';

describe('HomeProfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeProfService = TestBed.get(HomeProfService);
    expect(service).toBeTruthy();
  });
});
