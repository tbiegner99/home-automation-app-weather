import AbstractReducingStore from '../AbstractReducingStore';
import StoreField from '../StoreField';
import SongsEvents from '../../events/SongsEvents';

class PlaylistStore extends AbstractReducingStore {
  constructor() {
    super();
    this.data = {
      autoCompleteResults: new StoreField('autoCompleteResults', null),
      searchResults: new StoreField('searchResults', null)
    };
  }

  get autoCompleteResults() {
    return this.data.autoCompleteResults;
  }

  get searchResults() {
    return this.data.searchResults;
  }

  handleEvent(action) {
    switch (action.type) {
      case SongsEvents.AUTO_COMPLETE_RESULTS:
        this.data.autoCompleteResults.value = action.data;
        break;
      case SongsEvents.SEARCH_RESULTS:
        this.data.searchResults.value = action.data;
        break;
      default:
        return false;
    }
    return true;
  }
}

export default new PlaylistStore();
