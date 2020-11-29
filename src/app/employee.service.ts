import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IEmployee} from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private _url: string ="/assets/employees.json"

  getEmployee(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}
