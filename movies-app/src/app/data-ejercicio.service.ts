import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataEjercicioService {
  peliculas: string[] = ['Inception', 'The Dark Knight', 'Interstellar', 'Parasite'];
  constructor() { }

  getPeliculas(): string[] {
    return this.peliculas;
  }
}
