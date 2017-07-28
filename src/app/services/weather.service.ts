import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { WEATHER_BY_CITY_MOCK } from './weather.mock';
import { Weather } from './weather.model';

@Injectable()
export class WeatherService {
  constructor() {}

  getWeatherByCityId(id: number, name: string): Observable<Weather> {
    return Observable.of(WEATHER_BY_CITY_MOCK).map(weather =>
      Object.assign({}, weather.main, { id, name })
    );
  }
}
