import AutomaticLocationUpdatesDeviceInfo from './AutomaticLocationUpdatesDeviceInfo';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

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
