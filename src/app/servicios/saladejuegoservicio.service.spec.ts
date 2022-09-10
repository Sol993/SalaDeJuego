import { TestBed } from '@angular/core/testing';

import { SaladejuegoservicioService } from './saladejuegoservicio.service';

describe('SaladejuegoservicioService', () => {
  let service: SaladejuegoservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaladejuegoservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
