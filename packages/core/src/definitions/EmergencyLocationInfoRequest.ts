import EmergencyLocationInfoRequestAddress from './EmergencyLocationInfoRequestAddress';
import ShortSiteInfo from './ShortSiteInfo';

interface EmergencyLocationInfoRequest {
  /**
   * Internal identifier of an emergency response location
   */
  id?: string;

  /**
   */
  address?: EmergencyLocationInfoRequestAddress;

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
   * Address format id
   */
  addressFormatId?: string;

  /**
   * Visibility of an emergency response location. If `Private`
 *  is set, then a location is visible only for restricted number of users,
 *  specified in `owners` array
   * Default: Public
   */
  visibility?: ('Public');
}

export default EmergencyLocationInfoRequest;
