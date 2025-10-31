import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataEjercicioService } from '../data-ejercicio.service';

@Component({
  selector: 'app-componente-array',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-array.component.html',
  styleUrls: ['./componente-array.component.css']
})
export class ComponenteArrayComponent {
    peliculas: string[] = [];

    constructor(private dataService: DataEjercicioService) {}

    ngOnInit(): void {
        this.peliculas = this.dataService.getPeliculas();
    }
}
