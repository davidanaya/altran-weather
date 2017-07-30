import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { RouterLinkStubDirective } from 'testing/router-stubs';

import { CityComponent } from './city.component';
import { WeatherIconsListComponent } from 'app/components/weather-icons-list/weather-icons-list.component';

const WEATHER = {
  timestamp: Date.now(),
  id: 2643743,
  name: 'London',
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

describe('CityComponent', () => {
  let component: CityComponent;
  let fixture: ComponentFixture<CityComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CityComponent,
        WeatherIconsListComponent,
        RouterLinkStubDirective
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CityComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    component.weather = WEATHER;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have ${WEATHER.name} as city name`, () => {
    expect(
      el.query(By.css('.city-card__name')).nativeElement.textContent
    ).toEqual(WEATHER.name);
  });

  it(`should have ${WEATHER.temp}°C as city temperature`, () => {
    expect(
      el.query(By.css('.city-card__temperature')).nativeElement.textContent
    ).toEqual(`${WEATHER.temp}°C`);
  });
});
