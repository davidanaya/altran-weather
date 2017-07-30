import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { StoreModule, Store } from '@ngrx/store';

import { RouterLinkStubDirective } from 'testing/router-stubs';

import { CitiesListComponent } from './cities-list.component';
import { CityComponent } from 'app/components/city/city.component';
import { WeatherIconsListComponent } from 'app/components/weather-icons-list/weather-icons-list.component';
import { storeReducer } from 'app/state/reducers/store-reducer';
import { AppState } from 'app/state/state';
import { INITIAL_CITIES } from 'app/db/cities';
import { WEATHER_BY_CITY_MOCK } from 'app/services/weather.mock';

const INITIAL_STATE: AppState = {
  cities: [
    {
      id: 6559994,
      name: 'Buenos Aires',
      country: 'PE'
    }
  ],
  weatherByCity: {
    6559994: {
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
    }
  },
  historicalByCity: {}
};

describe('CitiesListComponent', () => {
  let component: CitiesListComponent;
  let fixture: ComponentFixture<CitiesListComponent>;
  let el: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [StoreModule.provideStore(storeReducer, INITIAL_STATE)],
        declarations: [
          CitiesListComponent,
          CityComponent,
          WeatherIconsListComponent,
          RouterLinkStubDirective
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesListComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a cities$ observable with the same value as in the Store', () => {
    component.cities$.subscribe(c => {
      expect(c).toEqual(INITIAL_STATE.cities);
    });
  });

  it('should have a weatherByCity$ observable with the same value as in the Store', () => {
    component.weatherByCity$.subscribe(c => {
      expect(c).toEqual(INITIAL_STATE.weatherByCity);
    });
  });
});
