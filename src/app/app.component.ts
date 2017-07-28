import { Component } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <app-cities-list [refresh]="refresh"></app-cities-list>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  refresh: number;

  constructor() {
    this.refresh = environment.refresh;
  }
}
