import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap, catchError } from 'rxjs/operators';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private itemsUrl = '../assets/Movies.json';;  

  constructor(private http:HttpClient) { }
}
