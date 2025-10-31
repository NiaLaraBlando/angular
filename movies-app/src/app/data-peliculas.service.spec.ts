import { TestBed } from '@angular/core/testing';

import { DataPeliculasService } from './data-peliculas.service';

describe('DataPeliculasService', () => {
  let service: DataPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
