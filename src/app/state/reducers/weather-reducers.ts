import { AppState } from '../state';
import { CityWeatherLoadedAction } from '../actions/weather';

export function handleCityWeatherLoadedAction(
  state: AppState,
  action: CityWeatherLoadedAction
): AppState {
  const weather = action.payload;
  const newState: AppState = Object.assign({}, state);
  newState.weatherByCity[weather.name] = weather;
  return newState;
}
