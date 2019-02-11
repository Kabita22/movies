import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { movie } from '../interfaces/movies';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private moviesUrl = '../assets/Movies.json';;

  constructor(private http:HttpClient) { }

  getMovies():Observable<movie[]>{
    return this.http.get<movie[]>(this.moviesUrl).pipe
    (tap(data=>console.log(JSON.stringify(data)))
  );
}}
