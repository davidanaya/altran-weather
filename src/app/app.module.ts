import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// state
import { INITIAL_STATE } from 'app/state/state';
import { storeReducer } from 'app/state/reducers/store-reducer';

// modules
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { CitiesListComponent } from './containers/cities-list/cities-list.component';
import { CityComponent } from './components/city/city.component';
import { WeatherIconsListComponent } from './components/weather-icons-list/weather-icons-list.component';
import { HistoricalCityWeatherComponent } from './containers/historical-city-weather/historical-city-weather.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// services
import { WeatherService } from 'app/services/weather.service';
import { LoadWeatherEffectService } from 'app/state/effects/load-weather-effect.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesListComponent,
    CityComponent,
    WeatherIconsListComponent,
    HistoricalCityWeatherComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.provideStore(storeReducer),
    EffectsModule.run(LoadWeatherEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [WeatherService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
