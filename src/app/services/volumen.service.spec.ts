import { TestBed } from '@angular/core/testing';

import { VolumenService } from './volumen.service';

describe('VolumenService', () => {
  let service: VolumenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolumenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
