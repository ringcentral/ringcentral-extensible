import {
  EmergencyLocationAddressInfo,
  ShortSiteInfo,
  LocationOwnerInfo,
} from './index';

class EmergencyLocationInfoRequest {
  /**
   * Internal identifier of the emergency response location
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
  addressStatus?: 'Valid' | 'Invalid';

  /**
   * Status of emergency response location usage.
   */
  usageStatus?: 'Active' | 'Inactive';

  /**
   * Visibility of an emergency response location. If `Private` is set, then location is visible only for restricted number of users, specified in `owners` array
   * Default: Public
   */
  visibility?: 'Private' | 'Public';

  /**
   * List of private location owners
   */
  owners?: LocationOwnerInfo[];
}

export default EmergencyLocationInfoRequest;
