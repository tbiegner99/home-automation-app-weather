import { combineReducers } from 'redux';
import PlaylistStore from '../stores/kareoke/PlaylistStore';
import SongsStore from '../stores/kareoke/SongsStore';
import ApplicationStore from '../stores/ApplicationStore';
import WeatherStore from '../stores/weather/WeatherStore';
import TVStore from '../stores/tv/TVStore';
import ToDoListStore from '../stores/todo/ToDoListStore';

export default combineReducers({
  application: ApplicationStore.reduce,
  playlist: PlaylistStore.reduce,
  songs: SongsStore.reduce,
  weather: WeatherStore.reduce,
  todo: ToDoListStore.reduce,
  tv: TVStore.reduce
});
