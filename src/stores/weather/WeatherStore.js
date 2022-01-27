import AbstractReducingStore from '../AbstractReducingStore';
import StoreField from '../StoreField';
import WeatherEvents from '../../events/WeatherEvents';
import WeatherActionCreator from '../../actionCreators/weather/WeatherActionCreator';

class ApplicationStore extends AbstractReducingStore {
  constructor() {
    super();
    this.data = {
      currentWeather: new StoreField('currentWeather', null, this.getCurrentWeather.bind(this))
    };
  }

  getCurrentWeather() {
    return WeatherActionCreator.getCurrentWeather();
  }

  get currentWeather() {
    return this.data.currentWeather;
  }

  handleEvent(action) {
    switch (action.type) {
      case WeatherEvents.CURRENT_WEATHER_UPDATED:
        this.data.currentWeather.value = action.data.currentWeather;
        break;
      default:
        return false;
    }
    return true;
  }
}

export default new ApplicationStore();
