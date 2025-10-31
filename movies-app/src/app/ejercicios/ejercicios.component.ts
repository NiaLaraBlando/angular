import { Component } from '@angular/core';
import { ComponenteMensajesComponent } from '../componente-mensajes/componente-mensajes.component';
import { ComponenteObjetoComponent } from "../componente-objeto/componente-objeto.component";
import { ComponenteArrayComponent } from "../componente-array/componente-array.component";

@Component({
  selector: 'app-ejercicios',
  standalone: true,
  imports: [ComponenteMensajesComponent, ComponenteObjetoComponent, ComponenteArrayComponent],
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent {

}
