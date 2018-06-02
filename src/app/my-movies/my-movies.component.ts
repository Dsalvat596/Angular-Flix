import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {Movie} from '../movie';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  title: string = 'Select movies from below to add to your collection';
  privateMovies: Movie[];
  currentSearchTerm: string;
  deleteMoviesFromPrivate: boolean;
  showselect:boolean=false;

  constructor( private moviesService: MoviesService ) { }

  ngOnInit() {
    this.privateMovies = this.moviesService.getPrivateMovies();
   
    console.log(this.privateMovies)
  }

  searchMovie(searchTerm: string) {
    // let foundMovie = this.privateMovies.find((movie) => movie.title.includes(searchTerm != '' && searchTerm));
    this.currentSearchTerm = searchTerm;
  }

  get budgetState() {
    return this.moviesService.getBudgetState();
  }

  allowRemoveMovies() {
    this.deleteMoviesFromPrivate = !this.deleteMoviesFromPrivate;
   
  }

  removeMovieFromPrivate(movie: Movie) {
    this.moviesService.removeMovieFromPrivateMovieArray(movie);
    if(this.moviesService.privateMovies.length === 0){
      this.deleteMoviesFromPrivate = false;
    }
  }
}
