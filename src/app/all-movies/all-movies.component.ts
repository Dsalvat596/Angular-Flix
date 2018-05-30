import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})

export class AllMoviesComponent implements OnInit {
 
  
  constructor(private moviesService: MoviesService) { 
    
  }

  ngOnInit() {
  
  }

}
