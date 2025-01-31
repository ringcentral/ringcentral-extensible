import DeviceResource from "./DeviceResource.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
