import { TestBed } from '@angular/core/testing';

import { ProfDetailsService } from './prof-details.service';

describe('ProfDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfDetailsService = TestBed.get(ProfDetailsService);
    expect(service).toBeTruthy();
  });
});
