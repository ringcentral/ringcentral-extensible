import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type WirelessPointInfo from "./WirelessPointInfo.js";

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
