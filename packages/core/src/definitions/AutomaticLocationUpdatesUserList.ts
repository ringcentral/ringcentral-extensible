import type AutomaticLocationUpdatesUserInfo from "./AutomaticLocationUpdatesUserInfo.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";

interface AutomaticLocationUpdatesUserList {
  /**
   * Link to the users list resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: AutomaticLocationUpdatesUserInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default AutomaticLocationUpdatesUserList;
