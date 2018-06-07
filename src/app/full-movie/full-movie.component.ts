import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService} from '../movies.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-full-movie',
  templateUrl: './full-movie.component.html',
  styleUrls: ['./full-movie.component.scss']
})
export class FullMovieComponent implements OnInit {
  fullMovie: Movie = new Movie();

  constructor(private moviesService: MoviesService, private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.moviesService.getFullMovie(params.id).subscribe((resp) =>{
        this.fullMovie = resp
        console.log(this.fullMovie);
        return this.fullMovie;
      })
    });
  }


  purchaseMovie(movie: Movie){
      this.userService.addMovieToPrivateMovies(movie);
  }
}
