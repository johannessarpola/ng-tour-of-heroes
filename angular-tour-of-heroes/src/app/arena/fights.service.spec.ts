import { TestBed } from '@angular/core/testing';

import { FightsService } from './fights.service';

describe('FightsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FightsService = TestBed.get(FightsService);
    expect(service).toBeTruthy();
  });
});
