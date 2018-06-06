import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Movie } from '../movie';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie = new Movie();
  @Output() clickedMovie: EventEmitter<Movie> = new EventEmitter();
  @Input() deleteMoviesFromPrivate: boolean;
  @Output() clickToRemoveMovie: EventEmitter<Movie> = new EventEmitter();


  constructor( ) {}

  ngOnInit() {
  }

  movieWasClicked(movie: Movie) {
    this.clickedMovie.emit(movie);
  }

  removeMovieFromPrivate(movie: Movie) {
    this.clickToRemoveMovie.emit(movie);
  }

}
