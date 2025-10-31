import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { CommonModule } from '@angular/common';
import { DataPeliculasService } from '../data-peliculas.service';

export interface Movie {
    title: string;
    year: number;
    description: string;
    cover: string;
}

@Component({
  selector: 'app-movie-list',
  standalone: true,
    imports: [CommonModule, MovieItemComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
    movies: Movie[] = [];

    constructor(private dataService: DataPeliculasService) {}

    ngOnInit(): void {
        this.movies = this.dataService.getPeliculas();
    }

    selectedMovie: Movie | null = null;

    @ViewChild('scroller', { read: ElementRef }) scroller!: ElementRef<HTMLElement>;

    canScrollLeft = false;
    canScrollRight = false;
    private scrollAmount = 360; // px para desplazar por clic (aprox. el ancho de una tarjeta)

    ngAfterViewInit(): void {
    // retardo para permitir que el DOM se estabilice
        setTimeout(() => this.updateScrollButtons(), 50);
    }

    @HostListener('window:resize')
    onWindowResize() {
        this.updateScrollButtons();
    }

    onScroll() {
        this.updateScrollButtons();
    }

    private updateScrollButtons() {
        const el = this.scroller?.nativeElement;
        if (!el) return;
        const maxScrollLeft = el.scrollWidth - el.clientWidth;
        this.canScrollLeft = el.scrollLeft > 5;
        this.canScrollRight = el.scrollLeft < (maxScrollLeft - 5);
    }

    scrollLeft() {
        const el = this.scroller.nativeElement;
        el.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
    // actualizar después de que comience la animación
        setTimeout(() => this.updateScrollButtons(), 200);
    }

    scrollRight() {
        const el = this.scroller.nativeElement;
        el.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
        setTimeout(() => this.updateScrollButtons(), 200);
    }

    onMovieSelected(movie: Movie) {
        this.selectedMovie = movie;
    }
}
