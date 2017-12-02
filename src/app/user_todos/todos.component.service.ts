import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//Inject this service to use in component
@Injectable()
export class TodosComponentService {

constructor (private http: Http) {}

categories: any[] = [];
todos: any[] = [];

 getTodos (URL) {
    return this.http.get(URL)
              .toPromise()
              .then(result => { 
              	localStorage.setItem("AllTodos", JSON.stringify(result.json()));
              	this.todos = JSON.parse(localStorage.getItem("AllTodos"));	              	
              	
      		              
				for (var i = 0; i < this.todos.length; i++) {
					var groupBy = this.todos[i].userId;
					if (!this.categories[groupBy])
						this.categories[groupBy] = [];
						this.categories[groupBy].push(this.todos[i]);
				};

				localStorage.setItem("GroupBy", JSON.stringify(this.categories));

              	return result.json();
              });
  }
}