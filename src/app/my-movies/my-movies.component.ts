import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {
  myMovies: Array<Movie>;

  constructor(private moviesService: MoviesService) { 
  this.myMovies = moviesService.getMyMovies();
  }
  ngOnInit() {
    console.log('test');
  }

}
