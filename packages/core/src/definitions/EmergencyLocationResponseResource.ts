import type CommonEmergencyLocationAddressInfo from './CommonEmergencyLocationAddressInfo';
import type ShortSiteInfo from './ShortSiteInfo';
import type LocationOwnerInfo from './LocationOwnerInfo';

/**
 * Company emergency response location details
 */
interface EmergencyLocationResponseResource {
  /**
   * Internal identifier of an emergency response location
   */
  id?: string;

  /**
   */
  address?: CommonEmergencyLocationAddressInfo;

  /**
   * Emergency response location name
   */
  name?: string;

  /**
   */
  site?: ShortSiteInfo;

  /**
   * Emergency address status
   */
  addressStatus?: 'Valid' | 'Invalid' | 'Provisioning';

  /**
   * Status of emergency response location usage.
   */
  usageStatus?: 'Active' | 'Inactive';

  /**
   * Resulting status of emergency address synchronization. Returned
   *  if `syncEmergencyAddress` parameter is set to `true`
   */
  syncStatus?: 'Verified' | 'Updated' | 'Deleted' | 'ActivationProcess' | 'NotRequired' | 'Unsupported' | 'Failed';

  /**
   */
  addressType?: 'LocationWithElins' | 'LocationWithEndpoint';

  /**
   * Visibility of an emergency response location. If `Private`
   *  is set, then location is visible only for the restricted number of users,
   *  specified in `owners` array
   * Default: Public
   */
  visibility?: 'Private' | 'Public';

  /**
   * List of private location owners
   */
  owners?: LocationOwnerInfo[];

  /**
   * Address format ID
   */
  addressFormatId?: string;

  /**
   * If 'true' address validation for non-us addresses is skipped
   */
  trusted?: boolean;
}

export default EmergencyLocationResponseResource;
