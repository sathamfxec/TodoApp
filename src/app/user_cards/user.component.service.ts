import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//Inject this service to use in component
@Injectable()
export class UserComponentService {

constructor (private http: Http) {}

private _usersUrl = 'https://jsonplaceholder.typicode.com/users';

 getUsers () {
    return this.http.get(this._usersUrl)
              .toPromise()
              .then(result => { 
              	localStorage.setItem("Users", JSON.stringify(result.json()));
              	return result.json();
              });
  }
}