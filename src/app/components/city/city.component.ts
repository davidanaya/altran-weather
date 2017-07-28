import { Component, OnInit, Input } from '@angular/core';

import { City } from 'app/state/state';

@Component({
  selector: 'app-city',
  template: `
    <div class="city-card">
      <div class="city-card__name">{{ weather.name }}</div>
      <div class="city-card__temp">{{ weather.temp }}&deg;C</div>
    </div>
  `,
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() weather: any;

  constructor() {}

  ngOnInit() {}
}
