import CommonEmergencyLocationAddressInfo from "./CommonEmergencyLocationAddressInfo.js";
import SiteBasicInfo from "./SiteBasicInfo.js";

interface EmergencyLocationRequestResource {
  /**
   * Internal identifier of an emergency response location
   */
  id?: string;

  /** */
  address?: CommonEmergencyLocationAddressInfo;

  /**
   * Emergency response location name
   */
  name?: string;

  /** */
  site?: SiteBasicInfo;

  /**
   * Emergency address status
   */
  addressStatus?: "Valid" | "Invalid";

  /**
   * Status of an emergency response location usage.
   */
  usageStatus?: "Active" | "Inactive";

  /**
   * Address format ID
   */
  addressFormatId?: string;

  /**
   * Visibility of an emergency response location. If `Private`
   *  is set, then a location is visible only for restricted number of users,
   *  specified in `owners` array
   * Default: Public
   */
  visibility?: "Public";

  /**
   * Specifies emergency address validation during the ERL creation/update.
   *  If set to 'true', then address validation for non-US addresses is skipped
   */
  trusted?: boolean;
}

export default EmergencyLocationRequestResource;
