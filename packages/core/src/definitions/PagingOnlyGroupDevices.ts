import type PagingDeviceInfo from "./PagingDeviceInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface PagingOnlyGroupDevices {
  /**
   * Link to a list of devices assigned to the paging only group
   * Format: uri
   */
  uri?: string;

  /**
   * List of paging devices assigned to this group
   */
  records?: PagingDeviceInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default PagingOnlyGroupDevices;
