import WirelessPointInfo from "./WirelessPointInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default WirelessPointsList;
