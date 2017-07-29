import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalCityWeatherComponent } from './historical-city-weather.component';

describe('HistoricalCityWeatherComponent', () => {
  let component: HistoricalCityWeatherComponent;
  let fixture: ComponentFixture<HistoricalCityWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricalCityWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricalCityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
