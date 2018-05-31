import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})

export class AllMoviesComponent implements OnInit {
  movies = new Array<Movie>(); 
  selectedMovie: Movie;
  
  constructor(private moviesService: MoviesService) { 
    this.movies = moviesService.getMovies();
  }

  ngOnInit() {
  
  }
  selectMovie(i:number){
    this.selectedMovie = this.movies[i];
    this.moviesService.addMyMovies(this.selectedMovie)
  }
}
