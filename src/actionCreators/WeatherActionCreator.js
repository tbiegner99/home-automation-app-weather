import { BaseActionCreator } from '@tbiegner99/ui-app-components';

import WeatherDatasource from '../datasource/WeatherDatasource';
import WeatherEvents from '../events/WeatherEvents';

class WeatherActionCreator extends BaseActionCreator {
  async getCurrentWeather() {
    try {
      const results = await WeatherDatasource.getCurrentWeather();
      this.dispatch({
        type: WeatherEvents.CURRENT_WEATHER_UPDATED,
        data: { currentWeather: results }
      });
      return results;
    } catch (err) {
      this.dispatch({ type: WeatherEvents.POLL_CURRENT_WEATHER_ERROR, data: err });
      throw err;
    }
  }
}
export default new WeatherActionCreator();
