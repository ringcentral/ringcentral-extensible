import {
  EmergencyLocationAddressInfo,
  ShortSiteInfo,
  LocationOwnerInfo,
} from './index';

// Company emergency response location details
class EmergencyLocationInfo {
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
   * Resulting status of emergency address synchronization. Returned if `syncEmergencyAddress` parameter is set to 'True'
   */
  syncStatus?:
    | 'Verified'
    | 'Updated'
    | 'Deleted'
    | 'ActivationProcess'
    | 'Unsupported'
    | 'Failed';

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

export default EmergencyLocationInfo;
