import ProvisioningNavigationInfoUri from './ProvisioningNavigationInfoUri';

/**
 * Information on navigation
*/
class ProvisioningNavigationInfo {
  /**
   */
  firstPage?: ProvisioningNavigationInfoUri;

  /**
   */
  nextPage?: ProvisioningNavigationInfoUri;

  /**
   */
  previousPage?: ProvisioningNavigationInfoUri;

  /**
   */
  lastPage?: ProvisioningNavigationInfoUri;
}

export default ProvisioningNavigationInfo;
