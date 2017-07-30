import { Injectable } from '@angular/core';

import { Action, Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';

import {
  LOAD_WEATHER_ACTION,
  CityWeatherLoadedAction
} from 'app/state/actions/weather';

import { WeatherService } from 'app/services/weather.service';
import { City, AppState } from 'app/state/state';

@Injectable()
export class LoadWeatherEffectService {
  cities$: Observable<City[]>;

  @Effect()
  weather$: Observable<Action> = this.actions$
    .ofType(LOAD_WEATHER_ACTION)
    .switchMap(() =>
      this.cities$.switchMap(cities =>
        Observable.merge(
          ...cities.map(city =>
            this.service.getWeatherByCityIdMock(city.id, city.name)
          )
        )
      )
    )
    .map(weather => new CityWeatherLoadedAction(weather))
    .catch(err => {
      console.error(err);
      return Observable.empty();
    });

  constructor(
    private store: Store<AppState>,
    private actions$: Actions,
    private service: WeatherService
  ) {
    this.cities$ = this.store.select<City[]>('cities');
  }
}
