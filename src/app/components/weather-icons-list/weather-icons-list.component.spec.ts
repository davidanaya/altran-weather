import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { WeatherIconsListComponent } from './weather-icons-list.component';

const ICONS = ['50d'];

describe('WeatherIconsListComponent', () => {
  let component: WeatherIconsListComponent;
  let fixture: ComponentFixture<WeatherIconsListComponent>;
  let el: DebugElement;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WeatherIconsListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherIconsListComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    component.icons = ICONS;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have an <img> tag', () => {
    expect(
      el.query(By.css('img')).nativeElement.hasAttribute('src')
    ).toBeTruthy();
  });

  it(`should have an <img> tag with src attribute 'http://openweathermap.org/img/w/${ICONS[0]}.png'`, () => {
    expect(el.query(By.css('img')).nativeElement.getAttribute('src')).toEqual(
      `http://openweathermap.org/img/w/${ICONS[0]}.png`
    );
  });
});
