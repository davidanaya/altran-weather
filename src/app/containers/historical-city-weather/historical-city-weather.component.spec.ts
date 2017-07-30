import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { StoreModule } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { HistoricalCityWeatherComponent } from './historical-city-weather.component';
import { AppState } from 'app/state/state';
import { storeReducer } from 'app/state/reducers/store-reducer';

const HISTORICAL = {
  timestamp: Date.now(),
  id: 6559994,
  name: 'Buenos Aires',
  temp: 7,
  pressure: 1012,
  humidity: 81,
  temp_min: 5,
  temp_max: 8,
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

const INITIAL_STATE: AppState = {
  cities: [],
  weatherByCity: {},
  historicalByCity: {
    6559994: [HISTORICAL]
  }
};

describe('HistoricalCityWeatherComponent', () => {
  let component: HistoricalCityWeatherComponent;
  let fixture: ComponentFixture<HistoricalCityWeatherComponent>;
  let el: DebugElement;
  let route: ActivatedRoute;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          StoreModule.provideStore(storeReducer, INITIAL_STATE)
        ],
        declarations: [HistoricalCityWeatherComponent],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: {
              params: Observable.of({ id: 6559994 })
            }
          }
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalCityWeatherComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    route = el.injector.get(ActivatedRoute);

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get the id of a city from the route', () => {
    route.params.subscribe((params: Params) => {
      const cityId = params['id'];
      expect(cityId).toEqual(HISTORICAL.id);
    });
  });

  it('should have a historicalByCity$ observable with the same value as in the Store', () => {
    route.params.subscribe((params: Params) => {
      const cityId = params['id'];
      component.historicalByCity$.subscribe(c => {
        expect(c as any).toEqual([{
          name: HISTORICAL.name,
          temp: HISTORICAL.temp,
          timestamp: HISTORICAL.timestamp
        }]);
      });
    });
  });
});
