import ProvisioningNavigationInfoUri from './ProvisioningNavigationInfoUri';

/**
 * Information on navigation
*/
interface ProvisioningNavigationInfo {
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
