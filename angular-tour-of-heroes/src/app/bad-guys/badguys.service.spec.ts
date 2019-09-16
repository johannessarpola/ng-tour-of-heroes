import { TestBed } from '@angular/core/testing';

import { BadguysService } from './badguys.service';

describe('BadguysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BadguysService = TestBed.get(BadguysService);
    expect(service).toBeTruthy();
  });
});
