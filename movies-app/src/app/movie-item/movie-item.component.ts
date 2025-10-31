import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Movie {
  title: string;
  year: number;
  description: string;
  cover: string;
}

@Component({
  selector: 'app-movie-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent {
  @Input() movie!: Movie;
  @Output() movieSelected = new EventEmitter<Movie>();

  selectMovie() {
    if (this.movie) {
      this.movieSelected.emit(this.movie);
    }
  }
}

