import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { movie } from 'src/app/interfaces/movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  user:string=sessionStorage.getItem('username');
  movies:movie[];
  filteredMovies:movie[]=[];

  constructor(private moviesService: MoviesService, private router: Router) { 
  }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(movie=> this.movies=movie);
    this.moviesService.getMovies().subscribe(movie=> this.filteredMovies=movie);
  }

  changeLocation(location:string){
      this.filteredMovies=this.movies.filter(movie=> movie.location == location);
  }

  movieDetails(movieName: string){
    console.log(movieName);
    this.router.navigate['/movieDetails/'+movieName];
  }
}
