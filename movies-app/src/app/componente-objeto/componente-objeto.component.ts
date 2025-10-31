import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-objeto',
  standalone: true,
  imports: [],
  templateUrl: './componente-objeto.component.html',
  styleUrls: ['./componente-objeto.component.css']
})
export class ComponenteObjetoComponent {
    pelicula = {
        titulo: 'Inception',
        año: 2010,
        director: 'Christopher Nolan',
        genero: 'Ciencia ficción'
    };
}
