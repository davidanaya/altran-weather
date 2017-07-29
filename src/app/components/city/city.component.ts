import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { City } from 'app/state/state';
import { Weather } from 'app/services/weather.model';

@Component({
  selector: 'app-city',
  template: `
    <div class="city-card" *ngIf="weather">
      <div class="city-card__name">{{ weather.name }}</div>
      <div class="city-card__timestamp">{{ weather.timestamp | date:'fullDate' }}</div>
      <div class="city-card__temperature">{{ weather.temp }}&deg;C</div>
      <app-weather-icons-list [icons]="icons"></app-weather-icons-list>
      <a class="city-card__historical" [routerLink]="historical">Historical</a>
    </div>
  `,
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnChanges {
  @Input() weather: Weather;
  icons: string[];
  historical: string;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.weather && changes.weather.currentValue) {
      this.historical = `/historical/${this.weather.id}`;
      this.icons = this.weather.conditions.map(c => c.icon);
    }
  }
}
