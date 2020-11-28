import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<div [ngSwitch]="color">
  <div *ngSwitchCase="'red'">you picked red color</div>
  <div *ngSwitchCase="'blue'">you picked blue color</div>
<div>
  `,
  styles: ['./app.component.css']
})
export class AppComponent {

  public color="red";
  title = 'codeevalution';
  public isTrue=false;
}
