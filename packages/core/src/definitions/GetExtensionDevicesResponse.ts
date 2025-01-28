import DeviceResource from "./DeviceResource";
import PageNavigationModel from "./PageNavigationModel";
import EnumeratedPagingModel from "./EnumeratedPagingModel";

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
