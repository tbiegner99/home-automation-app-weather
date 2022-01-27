import AbstractReducingStore from '../AbstractReducingStore';
import StoreField from '../StoreField';
import PlaylistActionCreator from '../../actionCreators/kareoke/PlaylistActionCreator';
import PlaylistEvents from '../../events/PlaylistEvents';

class PlaylistStore extends AbstractReducingStore {
  constructor() {
    super();
    this.data = {
      playlistData: new StoreField('playlistData', null, this.getPlaylistData.bind(this))
    };
  }

  get playlistData() {
    return this.data.playlistData;
  }

  getPlaylistData() {
    return PlaylistActionCreator.getPlaylistItems();
  }

  handleEvent(action) {
    switch (action.type) {
      case PlaylistEvents.PLAYLIST_LOADED:
        this.data.playlistData.value = action.data;
        break;
      default:
        return false;
    }
    return true;
  }
}

export default new PlaylistStore();
