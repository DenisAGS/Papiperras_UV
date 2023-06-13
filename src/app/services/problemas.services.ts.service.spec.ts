import { TestBed } from '@angular/core/testing';

import { Problemas.Services.TsService } from './problemas.services.ts.service';

describe('Problemas.Services.TsService', () => {
  let service: Problemas.Services.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Problemas.Services.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
