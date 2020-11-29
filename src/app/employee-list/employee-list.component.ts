import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
  
  <h2> Employee List </h2>

  <ul *ngFor="let employee of employees">
        <li>{{employee.name}}</li>
  </ul>

  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees= [];

  // constructor(private _employeeService: EmployeeService) { 
    constructor(private _es: EmployeeService) { 

  }

  ngOnInit(): void {
    this._es.getEmployee()
    .subscribe(data=>this.employees=data);

  }

}
