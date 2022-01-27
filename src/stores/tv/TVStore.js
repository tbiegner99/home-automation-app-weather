import AbstractReducingStore from '../AbstractReducingStore';
import StoreField from '../StoreField';
import TVEvents from '../../events/TVEvents';
import TVGuideActionCreator from '../../actionCreators/tv/GuideActionCreator';

class TVStore extends AbstractReducingStore {
  constructor() {
    super();
    this.data = {
      guide: new StoreField('guide', null, this.loadGuide.bind(this))
    };
  }

  loadGuide() {
    return TVGuideActionCreator.loadGuide();
  }

  get guide() {
    return this.data.guide;
  }

  handleEvent(action) {
    switch (action.type) {
      case TVEvents.GUIDE_LOADED:
        this.data.guide.value = action.data.guide;
        break;
      default:
        return false;
    }
    return true;
  }
}

export default new TVStore();
