import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies = new Array<Movie>(); 

  constructor(private moviesService: MoviesService) {
    this.movies = moviesService.getMovies();
   }

  ngOnInit() {
    console.log(this.movies[1].title)
  }

}
