import type AutomaticLocationUpdatesDeviceInfo from "./AutomaticLocationUpdatesDeviceInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface ListDevicesAutomaticLocationUpdates {
  /**
   * Link to a devices resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of the user(s) devices with the current status of Emergency
   *  Address Auto Update Feature
   */
  records?: AutomaticLocationUpdatesDeviceInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default ListDevicesAutomaticLocationUpdates;
