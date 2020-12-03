import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public clsname1='one';
  public clsname2='two';
  constructor() { }

  ngOnInit(): void {
  }

  loginUser(signInForm: NgForm)
  {
    console.log(signInForm);
  }

}
