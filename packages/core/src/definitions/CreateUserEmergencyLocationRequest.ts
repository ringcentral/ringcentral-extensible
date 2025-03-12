import CommonEmergencyLocationAddressInfo from "./CommonEmergencyLocationAddressInfo.js";
import ShortSiteInfo from "./ShortSiteInfo.js";

interface CreateUserEmergencyLocationRequest {
  /**
   * Name of a new personal emergency response location
   */
  name?: string;

  /**
   * Address format ID
   */
  addressFormatId?: string;

  /**
   * Specifies emergency address validation during the ERL creation/update.
   *  If set to 'true', then address validation for non-US addresses is skipped
   */
  trusted?: boolean;

  /** */
  address?: CommonEmergencyLocationAddressInfo;

  /** */
  site?: ShortSiteInfo;
}

export default CreateUserEmergencyLocationRequest;
