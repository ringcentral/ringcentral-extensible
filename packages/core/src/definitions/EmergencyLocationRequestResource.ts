import type EmergencyAddressResourceRequest from "./EmergencyAddressResourceRequest.js";
import type SiteBasicInfo from "./SiteBasicInfo.js";

interface EmergencyLocationRequestResource {
  /**
   */
  address?: EmergencyAddressResourceRequest;

  /**
   * Emergency response location name
   */
  name?: string;

  /**
   */
  site?: SiteBasicInfo;

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
