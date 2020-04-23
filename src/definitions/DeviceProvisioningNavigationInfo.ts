import { DeviceProvisioningNavigationInfoUri } from '.'

class DeviceProvisioningNavigationInfo {
  /**
   * Canonical URI for the first page of the list
   */
  firstPage?: DeviceProvisioningNavigationInfoUri

  /**
   * Canonical URI for the next page of the list
   */
  nextPage?: DeviceProvisioningNavigationInfoUri

  /**
   * Canonical URI for the previous page of the list
   */
  previousPage?: DeviceProvisioningNavigationInfoUri

  /**
   * Canonical URI for the last page of the list
   */
  lastPage?: DeviceProvisioningNavigationInfoUri
}

export default DeviceProvisioningNavigationInfo
