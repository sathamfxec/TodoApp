import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'; //Added to perform http requests
import { AppComponent } from './app.component';
import { Users } from './user_cards/user.component';
import { TodosComponent } from './user_todos/todos.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'users', component: Users },
   { path: 'users/todos/:id', component: TodosComponent }
];

@NgModule({
  declarations: [
    AppComponent,Users,TodosComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }