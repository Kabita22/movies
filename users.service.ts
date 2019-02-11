import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { tap, catchError } from 'rxjs/operators';
import { user } from 'src/app/interface/user';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private itemsUrl = '../assets/Registration.json';;

  constructor(private http:HttpClient) { }

  getUsers():Observable<user[]>{
    return this.http.get<user[]>(this.itemsUrl).pipe
    (tap(data=>console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}
private handleError(err:HttpErrorResponse) {
  let errMsg:string='';
  if (err.error instanceof error) {    
     console.log('An error occurred:', err.error.message);
      errMsg=err.error.message;} 
     else {     
     console.log(`Backend returned code ${err.status}`);
        errMsg=err.error.status;
   }
      return Observable.throw(errMsg); 
}
}
