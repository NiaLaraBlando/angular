import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // etiqueta de la vista activa actual (placeholder hasta que se agreguen vistas)
  activeView: string = 'Vista de ejercicios';

  // texto del título del componente
  title: string = 'Movie App';

  // rastrear la clave de la ruta actual
  currentView: string = 'ejercicios';

  private viewLabels: Record<string, string> = {
    ejercicios: 'Vista de ejercicios',
    peliculas: 'Vista de películas'
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
  // inicializar desde la URL actual
    this.updateActiveFromUrl(this.router.url);

  // actualizar cuando la navegación termine
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((ev: any) => {
      this.updateActiveFromUrl(ev.urlAfterRedirects || ev.url);
    });
  }

  private updateActiveFromUrl(url: string) {
    if (!url) return;
    const key = url.replace(/^\//, '').split('/')[0] || 'ejercicios';
    this.currentView = key;
    this.activeView = this.viewLabels[key] ?? this.activeView;
  }

  // función auxiliar para cambiar la vista activa y navegar
  selectView(view: string) {
    this.router.navigate([view]);
    this.currentView = view;
    this.activeView = this.viewLabels[view] ?? this.activeView;
  }

}
