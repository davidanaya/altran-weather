import { Weather } from './weather.model';

export class WeatherBuilder {
  static buildWeatherViewModel(rawData: any): Weather {
    const weather = new Weather(rawData.id, rawData.name);
    const { main, weather: conditions } = rawData;
    Object.assign(weather, main);
    weather.conditions = conditions;
    return weather;
  }

  static buildWeatherMockViewModel(rawData: any, id: number, name: string): Weather {
    const weather = new Weather(id, name);
    const { main, weather: conditions } = rawData;
    Object.assign(weather, main);
    weather.conditions = conditions;
    return weather;
  }
}
