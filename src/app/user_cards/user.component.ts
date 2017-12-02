import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { UserComponentService } from './user.component.service';

@Component ({
   selector: 'my-app',
   providers: [  
    UserComponentService
   ],
   templateUrl: './user.component.html'  
})
export class Users implements OnInit {

	constructor (private _componentService: UserComponentService) {}

	users: any = [];

	ngOnInit() {	
    if(localStorage.getItem("Users") === null) {
  	 this._componentService.getUsers()
		  .then(users => this.users = users); 
    }
    else {
      this.users = JSON.parse(localStorage.getItem("Users"));      
    }    
	}

}