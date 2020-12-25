import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styles: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public title="my_project_title";
  public name="vidula_infotech";

  constructor(){}
  ngOnInit(): void {
    function isString(s): s is string {
  console.log("data type is",typeof(s))
  return typeof s === 'string';
}


function toUpperCase(x: unknown) {
  if(isString(x)) {
    console.log(x.toUpperCase())
  }else{
    console.log("it's not a string")
  }
}

console.log(toUpperCase(12));
  }



}
