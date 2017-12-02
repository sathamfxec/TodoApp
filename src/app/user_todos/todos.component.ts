import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TodosComponentService } from './todos.component.service';
import { ActivatedRoute } from '@angular/router';

@Component ({
   selector: 'my-app',
   providers: [  
    TodosComponentService
   ],
   templateUrl: './todos.component.html'  
})
export class TodosComponent implements OnInit {

	constructor (private _componentService: TodosComponentService, private route: ActivatedRoute) {}

	todos: any[] = [];
  groups: any[] = [];    

	ngOnInit() {        
    if(localStorage.getItem("AllTodos") === null) {      
     var TodoURL = 'https://jsonplaceholder.typicode.com/todos';
      this._componentService.getTodos(TodoURL)
      .then(todos => this.todos = todos);           
    }
    else {  
      this.todos = JSON.parse(localStorage.getItem("AllTodos"));
    }
    this.route.params.subscribe(params => {      
      this.groups = JSON.parse(localStorage.getItem("GroupBy"))[params.id];
    });     
	}

}