import { Action } from '@ngrx/store';

import { AppState, INITIAL_STATE } from '../state';
import { CITY_WEATHER_LOADED_ACTION } from '../actions/weather';
import { handleCityWeatherLoadedAction } from 'app/state/reducers/weather-reducers';

export function storeReducer(
  state: AppState = INITIAL_STATE,
  action: Action
): AppState {
  switch (action.type) {
    case CITY_WEATHER_LOADED_ACTION:
      return handleCityWeatherLoadedAction(state, action);
    default:
      return state;
  }
}
