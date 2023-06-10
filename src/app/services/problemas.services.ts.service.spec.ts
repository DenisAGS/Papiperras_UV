import { TestBed } from '@angular/core/testing';

import { ProblemasServices } from './problemas.services.ts.service';

describe('Problemas.Services.TsService', () => {
  let service: ProblemasServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemasServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
