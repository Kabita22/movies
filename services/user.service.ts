import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap, catchError } from 'rxjs/operators';
import { user } from 'src/app/interfaces/user';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = '../assets/Registration.json';;

  constructor(private http:HttpClient) { }

  getUsers():Observable<user[]>{
    return this.http.get<user[]>(this.usersUrl).pipe
    (tap(data=>console.log(JSON.stringify(data)))
  );
}

}