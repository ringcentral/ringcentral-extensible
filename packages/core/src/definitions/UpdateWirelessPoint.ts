import type EmergencyAddressAutoUpdateSiteInfo from "./EmergencyAddressAutoUpdateSiteInfo.js";
import type EmergencyAddressInfo from "./EmergencyAddressInfo.js";
import type EmergencyLocationInfo from "./EmergencyLocationInfo.js";

interface UpdateWirelessPoint {
  /**
   * Internal identifier of a wireless point
   */
  id?: string;

  /**
   * Unique 48-bit identifier of wireless access point that follows
   *  MAC address conventions. Mask: XX:XX:XX:XX:XX:XX, where X can be a symbol
   *  in the range of 0-9 or A-F
   */
  bssid?: string;

  /**
   * Name of a wireless access point
   */
  name?: string;

  /**
   */
  site?: EmergencyAddressAutoUpdateSiteInfo;

  /**
   */
  emergencyAddress?: EmergencyAddressInfo;

  /**
   */
  emergencyLocation?: EmergencyLocationInfo;
}

export default UpdateWirelessPoint;
