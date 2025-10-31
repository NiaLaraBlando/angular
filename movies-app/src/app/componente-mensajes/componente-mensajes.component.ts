import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente-mensajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente-mensajes.component.html',
  styleUrls: ['./componente-mensajes.component.css']
})
export class ComponenteMensajesComponent {
  // Propiedades simples de mensajes (inicializadas en la clase)
  message1: string = 'Mensaje uno';
  message2: string = 'Mensaje dos';
  showSecondMessage: boolean = false;

}
