import { TestBed } from '@angular/core/testing';

import { DataEjercicioService } from './data-ejercicio.service';

describe('DataEjercicioService', () => {
  let service: DataEjercicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataEjercicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
