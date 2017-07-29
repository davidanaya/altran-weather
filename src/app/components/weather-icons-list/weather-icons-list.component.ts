import { Component, OnInit, Input } from '@angular/core';

import { environment } from 'environments/environment';

@Component({
  selector: 'app-weather-icons-list',
  template: `
    <div class="weather-icons__list">
      <img *ngFor="let icon of icons" src="{{ imgApi + icon + '.png' }}"/>
    </div>
  `,
  styleUrls: ['./weather-icons-list.component.scss']
})
export class WeatherIconsListComponent implements OnInit {
  @Input() icons: string[];
  imgApi = environment.IMG_API;

  constructor() {}

  ngOnInit() {}
}
