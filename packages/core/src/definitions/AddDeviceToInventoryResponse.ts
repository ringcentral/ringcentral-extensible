import AddDeviceToInventoryResponseDevices from "./AddDeviceToInventoryResponseDevices.js";
import SiteBasicInfo from "./SiteBasicInfo.js";

interface AddDeviceToInventoryResponse {
  /**
   * Required
   */
  devices?: AddDeviceToInventoryResponseDevices[];

  /**
   * Required
   */
  site?: SiteBasicInfo;
}

export default AddDeviceToInventoryResponse;
