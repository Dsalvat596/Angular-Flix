import { Injectable, OnInit } from '@angular/core';
import { Movie } from './movie';
import { User } from './user';

let user: User = new User();
user.budget = 45;

@Injectable({
  providedIn: 'root'
})


export class UserService {
  public privateMovies: Movie[] = [
    // _id: "5a8a9f2550892c0014469819",
    // imgUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    // title: "The Good, the Bad and the Ugly",
    // year: 1966,
    // price: 15,
    // shortDescription: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    // fullDescription: "Blondie (The Good) is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes (The Bad) is a hit man who always commits to a task and sees it through, as long as he is paid to do so. And Tuco (The Ugly) is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership together making money off Tuco's bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor (Bill Carson) that he and a few other men have buried a stash of gold in a cemetery. Unfortunately Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows they know the location of the gold.",
    // director: "Sergio Leone"
  ]
  budget: number;
  budgetState: string;

  constructor() { }

  
  //1
  getPrivateMovies(): Movie[] {
    return this.privateMovies;
  }

  getBudget(): number {
    return user.budget;
  }

  getBudgetState(): string {
    return this.budgetState;
  }

  reduceFromBudget(price: number) {
    user.budget -= price;
  }

  addToBudget(price: number) {
    user.budget += price;
  }

  _addMovieToPrivateArray(movie: Movie) {
    this.privateMovies.push(movie);
    console.log(this.privateMovies);
  }

  _isMovieNewToArray(title: string, desc: string) {
    for (var movie of this.privateMovies) {
      if (title == movie.title && desc == movie.shortDescription) {
        return false;
      }
    }
    return true;
  }


  addMovieToPrivateMovies(movie: Movie) {
    if (user.budget >= movie.price && this._isMovieNewToArray(movie.title, movie.shortDescription)) {
      this._addMovieToPrivateArray(movie);
      this.reduceFromBudget(movie.price);
     this.budgetState = ``;
    } else if (user.budget > 0 && user.budget < movie.price) {
     this.budgetState = `You don't have enough money, you only have $${user.budget} left`;
    } else if (user.budget >= movie.price && (!this._isMovieNewToArray(movie.title, movie.shortDescription))) {
      this.budgetState = `${movie.title} is already in your collection`;
    } else {
      this.budgetState = `You can't purchase ${movie.title}, your budget is empty`;
    }
  }


  removeMovieFromPrivateMovieArray(movieToDelete: Movie) {
    let movieIndex = this.privateMovies.findIndex(m => m._id == movieToDelete._id);
    this.privateMovies.splice(movieIndex, 1);
    this.addToBudget(movieToDelete.price)
  
  }
}


