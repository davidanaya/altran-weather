import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

import { WEATHER_BY_CITY_MOCK } from './weather.mock';
import { Weather } from './weather.model';
import { WeatherBuilder } from './weather.builder';

@Injectable()
export class WeatherService {
  constructor(private http: Http) {}

  getWeatherByCityIdMock(id: number, name: string): Observable<Weather> {
    return Observable.of(WEATHER_BY_CITY_MOCK).map(weather =>
      WeatherBuilder.buildWeatherMockViewModel(weather, id, name)
    );
  }

  getWeatherByCityId(id: number): Observable<Weather> {
    const endpoint = `${environment.API}id=${id}&units=metric&${environment.API_KEY}`;
    return this.http
      .get(endpoint)
      .map(response => response.json())
      .map(weather => WeatherBuilder.buildWeatherViewModel(weather));
  }
}
