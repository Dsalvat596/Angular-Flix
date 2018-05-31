import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie = new Array<Movie>(); 


  constructor(private moviesService: MoviesService) {
    
   }

  ngOnInit() {
    
  }

  
}
