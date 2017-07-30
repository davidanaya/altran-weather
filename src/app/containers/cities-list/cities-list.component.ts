import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';

import { Store } from '@ngrx/store';

import { environment } from 'environments/environment';

import { AppState, City } from 'app/state/state';
import { LoadWeatherAction } from 'app/state/actions/weather';
import { Weather } from 'app/services/weather.model';

@Component({
  selector: 'app-cities-list',
  template: `
    <h3 class="title">Current weather</h3>

    <div class="timeout">
      <div>Refreshing data in {{ timeout$ | async }} seconds</div>
      <a (click)="reload()">Refresh now</a>
    </div>

    <div class="cities-list">
      <app-city
        *ngFor="let city of (cities$ | async)"
        [weather]="(weatherByCity$ | async)[city.id]">
      </app-city>
    </div>
  `,
  styleUrls: ['./cities-list.component.scss']
})
export class CitiesListComponent implements OnInit, OnDestroy {
  refresh: number;

  cities$: Observable<City[]>;
  weatherByCity$: Observable<{ [key: string]: Weather }>;

  timeout$: Observable<number>;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<AppState>) {
    this.refresh = environment.refresh;
  }

  ngOnInit() {
    this.cities$ = this.store.select('cities');
    this.weatherByCity$ = this.store.select('weatherByCity');
    this.load();
  }

  private load() {
    Observable.timer(0, this.refresh)
      .do(() => this.startTimeout())
      .do(() => this.store.dispatch(new LoadWeatherAction()))
      .takeUntil(this.ngUnsubscribe)
      .subscribe();
  }

  private startTimeout() {
    this.timeout$ = Observable.timer(1, 1000)
      .map(x => this.refresh / 1000 - x)
      .take(this.refresh / 1000)
      .takeUntil(this.ngUnsubscribe);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  private unsubscribe() {
    this.ngUnsubscribe.next();
  }

  reload() {
    this.unsubscribe();
    this.load();
  }
}
