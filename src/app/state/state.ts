import { INITIAL_CITIES } from 'app/db/cities';
import { Weather } from 'app/services/weather.model';

export interface City {
  id: number;
  name: string;
  country: string;
}

export interface AppState {
  cities: City[];
  weatherByCity: { [key: number]: Weather };
  historicalByCity: { [key: number]: Weather[] };
}

export const INITIAL_STATE: AppState = {
  cities: INITIAL_CITIES,
  weatherByCity: {},
  historicalByCity: {}
};
