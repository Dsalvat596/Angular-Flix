import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { User } from './user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// const allMovies: Movie[] = [
//   { id: 0, img: "https://i.pinimg.com/originals/b3/0b/6b/b30b6b2ed5b9be4981e33f50791d5522.jpg", title:"2001: A Space Odyssey", price:4, year:1968, descrShort:"Humanity finds a mysterious, obviously artificial object buried beneath the Lunar surface and, with the intelligent computer HAL 9000, sets off on a quest.", starring:"Keir Dullea, Gary Lockwood, Douglas Rain", director:"Stanley Kubrick"},
//   { id: 1, img: "https://www.moviehousememories.com/wp-content/uploads/2015/01/terminator-movie-still-1.jpg", title: "The Terminator", year: 1984, price: 2, descrShort: "A seemingly indestructible android is sent from 2029 to 1984 to assassinate a waitress, whose unborn son will lead humanity in a war against the machines, while a soldier from that war is sent to protect her at all costs.", starring: "Arnold Schwarzenegger, Michael Biehn, Linda Hamilton", director: "James Cameron"},
//   { id: 2, img: "https://i.ytimg.com/vi/AZnymkpsCH0/maxresdefault.jpg", price: 3, title: "The Lord of the Rings: The Two Towers", year: 2002, descrShort: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.", starring: "Viggo Mortsensen, Elijah Wood, Ian McKellan", director: "Peter Jackson"},
//   { id: 3, img: "http://www.bolsamania.com/cine/wp-content/uploads/2016/07/28-1.jpg", title: "Predator", price: 3, year: 1987, descrShort: "A team of commandos on a mission in a Central American jungle find themselves hunted by an extraterrestrial warrior.", starring: "Arnold Schwarzenegger, Carl Weathers, Bill Duke", director: "John McTiernan"},
//   { id: 4, img: "https://criticsroundup.com/wp-content/uploads/2014/04/strangers-on-a-train-still2edit-526x295.jpg", title: "Strangers on a Train", year: 1951, price: 3, descrShort: "A psychotic socialite confronts a pro tennis star with a theory on how two complete strangers can get away with murder - a theory that he plans to implement.", starring: "Farley Granger, Robert Walker, Ruth Roman", director: "Alfred Hitchcock"},
//   { id: 5, img: "http://duastorres.com.br/wp-content/uploads/2017/06/Top-Gun-Maverick.jpg", title: "Top Gun", year: 1986, price: 4, descrShort: "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.", starring: "Tom Cruise, Kelly McGillis, Val Kilmer", director: "Tony Scott"},
//   { id: 6, img: "https://filmgrab.files.wordpress.com/2013/02/295.jpg", title: "Chinatown", year: 1974, price: 5, descrShort: "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption, and murder.", starring: "Jack Nicholson, Faye Dunaway, John Houston", director: "Roman Polanski"},
//   { id: 7, img: "https://taskandpurpose.com/wp-content/uploads/2016/10/Screen-Shot-2016-10-12-at-10.50.20-AM-840x420.png", title: "Joe Dirt", year: 2001, price: 2, descrShort: "After being abandoned by his parents at the Grand Canyon, Joe Dirt tells the story of his journey to find his parents.", starring: "David Spade, Brittany Daniel, Dennis Miller", director: "Dennie Gordon"},
//   { id: 8, img: "http://www.indiewire.com/wp-content/uploads/2017/05/the-thing.jpg?w=780", title: "The Thing", year: 1982, price: 3, descrShort: "A crew in Antarctica finds a neighboring camp destroyed and its crew dead. Whatever killed them is nowhere to be found, unless it's hidden in plain sight.", starring: "Kurt Russell, Wilford Brimley, Keith David", director: "John Carpenter"}
// ];

const privateMovies: Movie[] = [];

let user: User = new User();
user.budget = 100;


@Injectable()
export class MoviesService {
  private apiUrl = "https://anguflix-api.herokuapp.com/api/movies"
  movies: Movie = new Movie();
  privateMovies: Movie[] = privateMovies;
  budgetState: string;

  constructor( private http: HttpClient) { }

  getAllMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.apiUrl);
  }

  // getPrivateMovies(): Movie[] {
  //   return privateMovies;
  // }

  // getBudget(): number {
  //   return user.budget;
  // }

  // getBudgetState(): string {
  //   return this.budgetState;
  // }

  // addMovieToPrivateArray(movie: Movie){
  //   privateMovies.push(movie);
  //   console.log(this.privateMovies);
  // }

  // reduceFromBudget(price: number) {
  //   user.budget -= price;
  // }

  // addToBudget(price: number) {
  //   user.budget += price;
  // }

  // isMovieNewToArray(title: string, desc: string) {
  //   for (var movie of privateMovies) {
  //     if (title == movie.title && desc == movie.shortDescription) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // addMovieToPrivateMovies(movie: Movie) {
  //   if (user.budget >= movie.price && this.isMovieNewToArray(movie.title, movie.shortDescription)) {
  //     this.addMovieToPrivateArray(movie);
  //     this.reduceFromBudget(movie.price);
  //     this.budgetState = ``;
  //   } else if (user.budget > 0 && user.budget < movie.price) {
  //     this.budgetState = `You don't have enough money, you only have $${user.budget} left`;
  //   } else if (user.budget >= movie.price && (!this.isMovieNewToArray(movie.title, movie.shortDescription))) {
  //     this.budgetState = `${movie.title} is already in your collection`;
  //   } else {
  //     this.budgetState = `You can't purchase ${movie.title}, your budget is empty`;
  //   }
  // }

  // removeMovieFromPrivateMovieArray(movieToDelete: Movie) {
  //   let movieIndex = this.privateMovies.findIndex(m => m._id == movieToDelete._id);
  //   this.privateMovies.splice(movieIndex, 1);
  //   this.addToBudget(movieToDelete.price)
  //   // this.privateMovies = this.privateMovies.filter((movie) => {
  //   //   return movie.id !== movieToDelete.id;
  //   // });
  //   // return this.privateMovies;
  // }
}
