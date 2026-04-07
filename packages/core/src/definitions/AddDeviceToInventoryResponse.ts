import type AddDeviceToInventoryResponseDevices from "./AddDeviceToInventoryResponseDevices.js";
import type SiteBasicInfo from "./SiteBasicInfo.js";

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
