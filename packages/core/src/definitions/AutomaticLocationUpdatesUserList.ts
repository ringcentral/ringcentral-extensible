import AutomaticLocationUpdatesUserInfo from "./AutomaticLocationUpdatesUserInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface AutomaticLocationUpdatesUserList {
  /**
   * Link to the users list resource
   * Format: uri
   */
  uri?: string;

  /** */
  records?: AutomaticLocationUpdatesUserInfo[];

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default AutomaticLocationUpdatesUserList;
