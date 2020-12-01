import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styles: ['./app.component.css']
})

export class AppComponent {

  public title="my_project_title";
 

  user={
    userId:20,
    firstName:'Arc',
    lastName:'Tutorials',
    DOB:'07/23/1991',
    salary : 12000
  };

  constructor(){}
}
