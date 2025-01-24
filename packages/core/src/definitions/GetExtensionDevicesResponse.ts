import type DeviceResource from "./DeviceResource";
import type PageNavigationModel from "./PageNavigationModel";
import type EnumeratedPagingModel from "./EnumeratedPagingModel";

interface GetExtensionDevicesResponse {
  /**
   * Link to a list of extension devices
   * Format: uri
   */
  uri?: string;

  /**
   * List of extension devices
   * Required
   */
  records?: DeviceResource[];

  /**
   * Required
   */
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default GetExtensionDevicesResponse;
