import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherIconsListComponent } from './weather-icons-list.component';

describe('WeatherIconsListComponent', () => {
  let component: WeatherIconsListComponent;
  let fixture: ComponentFixture<WeatherIconsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherIconsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIconsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
