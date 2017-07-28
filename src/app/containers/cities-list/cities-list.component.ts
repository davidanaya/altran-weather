import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { AppState, City } from 'app/state/state';
import { LoadWeatherAction } from 'app/state/actions/weather';
import { Weather } from 'app/services/weather.model';

@Component({
  selector: 'app-cities-list',
  template: `
    <div class="cities-list">
      <app-city
        *ngFor="let city of (cities$ | async)"
        [weather]="(weatherByCity$ | async)[city.name]">
      </app-city>
    </div>
  `,
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit, OnDestroy {
  @Input() refresh: number;

  cities$: Observable<City[]>;
  weatherByCity$: Observable<{ [key: string]: Weather }>;
  subscription: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.cities$ = this.store.select('cities');
    this.weatherByCity$ = this.store.select('weatherByCity');

    this.subscription = Observable.timer(0, this.refresh)
      .do(() => this.store.dispatch(new LoadWeatherAction()))
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
