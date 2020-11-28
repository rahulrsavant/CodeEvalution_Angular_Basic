import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2 *ngIf ="isTrue; else elseBlock">
    codeevolution
  </h2>

  <ng-template #elseBlock>
    <h2>
      name is hidden
    </h2>
  </ng-template>
  `,
  styles: ['./app.component.css']
})
export class AppComponent {
  title = 'codeevalution';
  public isTrue=false;
}
