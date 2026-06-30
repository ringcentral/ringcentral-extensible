import type EmergencyAddressAutoUpdateSiteInfo from "./EmergencyAddressAutoUpdateSiteInfo.js";
import type EmergencyAddressInfo from "./EmergencyAddressInfo.js";
import type EmergencyLocationInfo from "./EmergencyLocationInfo.js";

interface WirelessPointInfo {
  /**
   * Link to the wireless point resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a wireless point
   */
  id?: string;

  /**
   * Unique 48-bit identifier of the wireless access point that follows MAC address conventions
   * Required
   */
  bssid?: string;

  /**
   * Wireless access point name
   * Required
   */
  name?: string;

  /**
   */
  site?: EmergencyAddressAutoUpdateSiteInfo;

  /**
   * Required
   */
  emergencyAddress?: EmergencyAddressInfo;

  /**
   */
  emergencyLocation?: EmergencyLocationInfo;
}

export default WirelessPointInfo;
