import { Action } from '@ngrx/store';

export const LOAD_WEATHER_ACTION = 'LOAD_WEATHER_ACTION';
export const CITY_WEATHER_LOADED_ACTION = 'CITY_WEATHER_LOADED_ACTION';

export class LoadWeatherAction {
  type = LOAD_WEATHER_ACTION;
}

export class CityWeatherLoadedAction implements Action {
  type = CITY_WEATHER_LOADED_ACTION;

  constructor(public payload?: any) {}
}
