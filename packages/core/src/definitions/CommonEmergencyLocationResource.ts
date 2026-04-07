import type EmergencyLocationAddressResource from "./EmergencyLocationAddressResource.js";
import type SiteBasicInfo from "./SiteBasicInfo.js";
import type LocationOwnerInfo from "./LocationOwnerInfo.js";

/**
 * Company emergency response location details
 */
interface CommonEmergencyLocationResource {
  /**
   * Link to an emergency location resource
   */
  uri?: string;

  /**
   * Internal identifier of an emergency response location
   */
  id?: string;

  /**
   */
  address?: EmergencyLocationAddressResource;

  /**
   * Emergency response location name
   */
  name?: string;

  /**
   */
  site?: SiteBasicInfo;

  /**
   * Emergency address status
   */
  addressStatus?: "Valid" | "Invalid" | "Provisioning" | "Deprovisioned";

  /**
   * Status of emergency response location usage.
   */
  usageStatus?: "Active" | "Inactive";

  /**
   * Resulting status of emergency address synchronization. Returned
   *  if `syncEmergencyAddress` parameter is set to `true`
   */
  syncStatus?:
    | "Verified"
    | "Updated"
    | "Deleted"
    | "ActivationProcess"
    | "NotRequired"
    | "Unsupported"
    | "Failed";

  /**
   */
  addressType?: "LocationWithElins" | "LocationWithEndpoint";

  /**
   * Visibility of an emergency response location. If `Private`
   *  is set, then location is visible only for the restricted number of users,
   *  specified in `owners` array
   * Default: Public
   */
  visibility?: "Private" | "Public";

  /**
   * List of private location owners
   */
  owners?: LocationOwnerInfo[];

  /**
   * Address format ID
   */
  addressFormatId?: string;

  /**
   * Address format statuses
   */
  addressFormatStatus?: "Actual" | "Outdated" | "Deprecated";
}

export default CommonEmergencyLocationResource;
