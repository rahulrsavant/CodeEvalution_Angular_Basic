import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployee(){
   return [ 
  {"id":1,"name":"Rahul","age":30},
   {"id":2,"name":"Aarvi","age":10},
   {"id":3,"name":"Vidula","age":5},];
  }
}
