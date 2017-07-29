import { AppState } from '../state';
import { CityWeatherLoadedAction } from '../actions/weather';

import { Weather } from 'app/services/weather.model';

export function handleCityWeatherLoadedAction(
  state: AppState,
  action: CityWeatherLoadedAction
): AppState {
  const weather = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.weatherByCity[weather.id] = weather;
  newState.historicalByCity[weather.id] = addHistoricalWeather(
    state.historicalByCity[weather.id],
    weather
  );
  return newState;
}

function addHistoricalWeather(historical: Weather[] = [], weather: Weather) {
  return historical.concat(weather);
}
