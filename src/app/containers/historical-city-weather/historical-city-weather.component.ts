import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';

import { AppState } from 'app/state/state';
import { Weather } from 'app/services/weather.model';

@Component({
  selector: 'app-historical-city-weather',
  template: `
    <a class="navigation" routerLink="/home">Home</a>
    <div class="historical-data" *ngIf="historicalByCity$ | async; else no_data_found; let historical">
      <h3 class="city-name">{{ historical[0].name }}</h3>
      <div *ngFor="let weather of historical">
        <span class="date">{{ weather.timestamp | date:'medium' }}: </span>
        <span class="temperature">{{ weather.temp }}&deg;C</span>
      </div>
    </div>

    <ng-template #no_data_found>
      <div class="no-data">
        No data found, plese go back to home and choose another city.
      </div>
    </ng-template>
  `,
  styleUrls: ['./historical-city-weather.component.scss']
})
export class HistoricalCityWeatherComponent implements OnInit {
  historicalByCity$: Observable<{ [key: string]: Weather }>;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const cityId = params['id'];
      this.historicalByCity$ = this.store
        .select('historicalByCity')
        .map(historical => historical[cityId])
        .map(
          byCity =>
            byCity &&
            byCity.map(data => {
              return {
                name: data.name,
                temp: data.temp,
                timestamp: data.timestamp
              };
            })
        );
    });
  }
}
