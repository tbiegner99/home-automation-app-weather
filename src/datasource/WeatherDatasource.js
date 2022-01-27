import BaseDatasource from '../BaseDatasource';
import WeatherSerializer from '../serializers/weather/WeatherSerializer';

const BASE_URL = 'https://api.weather.gov';
class WeatherDatasource extends BaseDatasource {
  constructor() {
    super(null, BASE_URL);
  }

  async getCurrentWeather() {
    const url = this.constructUrl('/stations/KFRG/observations/latest');
    const results = await this.client.get(url);
    return WeatherSerializer.fromCurrentWeatherResponse(results.data);
  }
}

export default new WeatherDatasource();
