import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employees= [];

  // constructor(private _employeeService: EmployeeService) { 
    constructor(private _es: EmployeeService) { 

  }

  ngOnInit(): void {
    this._es.getEmployee()
    .subscribe(data=>this.employees=data);
  }


}
