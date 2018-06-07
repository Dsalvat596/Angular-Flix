import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { AllMoviesComponent} from './all-movies/all-movies.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { FullMovieComponent } from './full-movie/full-movie.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [{
  path: '',
  component: HomepageComponent
}, {
  path: 'full-movie/:id',
  component: FullMovieComponent
}]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 
})
export class AppRoutingModule { }
