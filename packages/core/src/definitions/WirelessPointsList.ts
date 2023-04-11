import WirelessPointInfo from './WirelessPointInfo';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

interface WirelessPointsList {
  /**
   * Link to a wireless points resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of wireless points with assigned emergency addresses
   */
  records?: WirelessPointInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default WirelessPointsList;
