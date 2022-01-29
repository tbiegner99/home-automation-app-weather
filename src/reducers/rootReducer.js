import { combineReducers } from 'redux';
import { ApplicationStore } from '@tbiegner99/ui-app-components';
import WeatherStore from '../stores/weather/WeatherStore';

export default combineReducers({
  application: ApplicationStore.reduce,
  weather: WeatherStore.reduce
});
