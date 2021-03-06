import { Component } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <h1>WEATHER APP</h1>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  refresh: number;

  constructor() {
    this.refresh = environment.refresh;
  }
}
