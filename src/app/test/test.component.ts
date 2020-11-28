import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  
  <h2>
          {{"Hello "+parentData}} 
  </h2>
  
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() public parentData;

  constructor() { }

  ngOnInit(): void {
  }

}
