import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
 
import { HttpClientModule } from '@angular/common/http';
// import { Subject } from 'rxjs/Subject';
// import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MyMoviesComponent } from './my-movies/my-movies.component';
import { MoviesService } from './movies.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { BudgetComponent } from './budget/budget.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    MyMoviesComponent,
    MovieCardComponent,
    BudgetComponent,
    SearchBarComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AngularFontAwesomeModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
