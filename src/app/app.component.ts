import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div *ngFor="let color of colors">
  {{color}}
<div>
  `,
  styles: ['./app.component.css']
})
export class AppComponent {

  public colors= ['red','green','blue'];
  constructor(){}
}
