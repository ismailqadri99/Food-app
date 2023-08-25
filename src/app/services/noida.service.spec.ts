import { TestBed } from '@angular/core/testing';
import { NoidaService } from './noida.service';


describe('NoidaService', () => {
  let service: NoidaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoidaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
