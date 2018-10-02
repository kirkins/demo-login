import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from '../user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  model = new User('','','', '');

  submitted = false;

  onSubmit() {
    console.log("submit");
    this.submitted = true;
    this.register(this.model);
  }

  public register (user: User): void {
    this.http.post<User>("http://localhost:5000/api/register", user).subscribe(
      res => { alert(JSON.stringify(res)) }
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  constructor(
      public http: HttpClient
  ) {}

  ngOnInit() {
  }
}
