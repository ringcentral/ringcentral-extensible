import DeviceProvisioningNavigationInfoUri from './DeviceProvisioningNavigationInfoUri';

/**
 * Information on navigation
*/
class DeviceProvisioningNavigationInfo {
  /**
   */
  firstPage?: DeviceProvisioningNavigationInfoUri;

  /**
   */
  nextPage?: DeviceProvisioningNavigationInfoUri;

  /**
   */
  previousPage?: DeviceProvisioningNavigationInfoUri;

  /**
   */
  lastPage?: DeviceProvisioningNavigationInfoUri;
}

export default DeviceProvisioningNavigationInfo;
