import { Routes } from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'ejercicios', pathMatch: 'full' },
	{ path: 'ejercicios', component: EjerciciosComponent },
	{ path: 'peliculas', component: PeliculasComponent },
	// rutas futuras (p.ej. peliculas) pueden añadirse aquí
];
