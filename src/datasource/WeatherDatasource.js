import { BaseDatasource, DispatcherFactory } from '@tbiegner99/ui-app-components';
import WeatherEvents from '../events/WeatherEvents';
import WeatherSerializer from '../serializers/weather/WeatherSerializer';

const BASE_URL = 'https://api.weather.gov';
class WeatherDatasource extends BaseDatasource {
  constructor() {
    super(null, BASE_URL);
  }

  async getCurrentWeather() {
    const url = this.constructUrl('/stations/KFRG/observations/latest');
    const results = await this.client.get(url);
    const weather = WeatherSerializer.fromCurrentWeatherResponse(results.data);
    DispatcherFactory.dispatch({ type: WeatherEvents.CURRENT_WEATHER_UPDATED, data: weather });
    return weather;
  }
}

export default new WeatherDatasource();
