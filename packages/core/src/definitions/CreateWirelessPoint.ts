import EmergencyAddressAutoUpdateSiteInfo from "./EmergencyAddressAutoUpdateSiteInfo.js";
import EmergencyAddressInfo from "./EmergencyAddressInfo.js";
import EmergencyLocationInfo from "./EmergencyLocationInfo.js";

interface CreateWirelessPoint {
  /**
   * Unique 48-bit identifier of wireless access point that follows MAC address conventions.  Mask: XX:XX:XX:XX:XX:XX, where X can be a symbol in the range of 0-9 or A-F
   * Required
   */
  bssid?: string;

  /**
   * Wireless access point name
   * Required
   */
  name?: string;

  /** */
  site?: EmergencyAddressAutoUpdateSiteInfo;

  /** */
  emergencyAddress?: EmergencyAddressInfo;

  /** */
  emergencyLocation?: EmergencyLocationInfo;
}

export default CreateWirelessPoint;
