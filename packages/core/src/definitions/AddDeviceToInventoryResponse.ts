import AddDeviceToInventoryResponseDevices from './AddDeviceToInventoryResponseDevices';
import SiteBasicInfo from './SiteBasicInfo';

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
