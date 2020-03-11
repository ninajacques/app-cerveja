import { TestBed } from '@angular/core/testing';

import { BeersaleService } from './beersale.service';

describe('BeersaleService', () => {
  let service: BeersaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeersaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
