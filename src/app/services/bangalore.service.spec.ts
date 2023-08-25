import { TestBed } from '@angular/core/testing';

import { BangaloreService } from './bangalore.service';

describe('BangaloreService', () => {
  let service: BangaloreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BangaloreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
