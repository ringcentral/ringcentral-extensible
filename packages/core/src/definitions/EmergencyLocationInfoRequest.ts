import EmergencyLocationAddressInfo from './EmergencyLocationAddressInfo';
import ShortSiteInfo from './ShortSiteInfo';

interface EmergencyLocationInfoRequest {
  /**
   * Internal identifier of an emergency response location
   */
  id?: string;

  /**
   */
  address?: EmergencyLocationAddressInfo;

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
  addressStatus?: ('Valid' | 'Invalid');

  /**
   * Status of an emergency response location usage.
   */
  usageStatus?: ('Active' | 'Inactive');

  /**
   * Visibility of an emergency response location. If `Private`
 *  is set, then a location is visible only for restricted number of users,
 *  specified in `owners` array
   * Default: Public
   */
  visibility?: ('Public');
}

export default EmergencyLocationInfoRequest;
