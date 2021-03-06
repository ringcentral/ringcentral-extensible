import {
  ExtensionDeviceResponse,
  DeviceProvisioningNavigationInfo,
  DeviceProvisioningPagingInfo,
} from './index';

class GetExtensionDevicesResponse {
  /**
   * Link to the list of extension devices
   */
  uri?: string;

  /**
   * List of extension devices
   * Required
   */
  records?: ExtensionDeviceResponse[];

  /**
   * Required
   */
  navigation?: DeviceProvisioningNavigationInfo;

  /**
   * Required
   */
  paging?: DeviceProvisioningPagingInfo;
}
export default GetExtensionDevicesResponse;
