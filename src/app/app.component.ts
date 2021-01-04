import { Component, OnInit } from '@angular/core';

import { Person } from './Person';
import {Observable}from 'rxjs'


@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styles: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {

/*     var d = [{'a': "something", 'b':12}, {'a': "something", 'b':12}, {'a': "somethingElse", 'b':12}, {'a': "something", 'b':12}, {'a': "somethingElse", 'b':12}]


     function findLastIndex<T>(array: Array<T>, 
      predicate: (value: T, index: number, obj: T[]) 
      => boolean): number {
        return 1;
      }
 
//=========================================================================================================
findLastIndex(d, [{'a',12}]);
findLastIndex(d, 'a', 'nothing');
 */

/* et someValue = [{'id': 1}, {'id': 2}, {'id': 3}, undefined, undefined];

console.log(someValue)
console.log(someValue.filter(val => val)); */

function Observable(observer) {
  //producer
  let counter=1;                                                                          
  const producer=setInterval(()=>{
    observer.next(counter++);
  },1000);

  return ()=>{
      clearInterval(producer);
  };
}

const closeFn=Observable({
    next:(data) => console.log(data),
    error:(err)=>console.log('error',err),
    complete:()=>console.log('done')    
  });  
  
  setTimeout(()=>{
    closeFn();
  },5000);
  
  }
}
