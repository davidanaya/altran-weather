import { TestBed, inject } from '@angular/core/testing';
import { Http, Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { WeatherService } from './weather.service';
import { WEATHER_BY_CITY_MOCK } from 'app/services/weather.mock';
import { Weather } from 'app/services/weather.model';

const WEATHER = {
  id: 2643743,
  name: 'London',
  temp: 7, pressure: 1012, humidity: 81, temp_min: 5, temp_max: 8,
  conditions: [
    { id: 701, main: 'Mist', description: 'mist', icon: '50d' },
    {
      id: 300,
      main: 'Drizzle',
      description: 'light intensity drizzle',
      icon: '09d'
    }
  ]
};

function createResponse(body) {
  return Observable.of(
    new Response(new ResponseOptions({ body: JSON.stringify(body) }))
  );
}

class MockHttp {
  get() {
    return createResponse([]);
  }
}

describe('WeatherService', () => {
  let service: WeatherService;
  let http: Http;

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [WeatherService, { provide: Http, useClass: MockHttp }]
    });
    http = bed.get(Http);
    service = bed.get(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get weather for a city', () => {
    spyOn(http, 'get').and.returnValue(createResponse(WEATHER_BY_CITY_MOCK));

    service.getWeatherByCityId(WEATHER_BY_CITY_MOCK.id)
      .subscribe((result) => {
        expect((result as Weather).name).toEqual(WEATHER.name);
        expect((result as Weather).id).toEqual(WEATHER.id);
        expect((result as Weather).conditions).toEqual(WEATHER.conditions);
      });
  });
});
