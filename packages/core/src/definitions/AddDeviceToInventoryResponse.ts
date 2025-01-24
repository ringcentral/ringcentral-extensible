import type AddDeviceToInventoryResponseDevices from "./AddDeviceToInventoryResponseDevices";
import type SiteBasicInfo from "./SiteBasicInfo";

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
