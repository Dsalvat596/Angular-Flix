import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

import { Movie } from '../movie';
import { UserService } from '../user.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  movies: Movie[];
  currentSearchTerm: string;
  showselect:boolean=false;
  constructor( private moviesService: MoviesService, private userService: UserService) { }

  ngOnInit() {
    this.moviesService.getAllMovies().subscribe((resp) => {
           this.movies = resp;
           console.log(resp[0]);
  });
  }

  searchMovie(searchTerm: string) {
    // let foundMovie = this.movies.find((movie) => movie.title.includes(searchTerm != '' && searchTerm));
    this.currentSearchTerm = searchTerm;
  }

  addMovieToPrivate(movie: Movie) {
    this.userService.addMovieToPrivateMovies(movie);
  }
}
