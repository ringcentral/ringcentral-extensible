import SwitchSiteInfo from "./SwitchSiteInfo.js";
import EmergencyAddressInfo from "./EmergencyAddressInfo.js";
import EmergencyLocationInfo from "./EmergencyLocationInfo.js";

interface SwitchInfo {
  /**
   * Link to the network switch resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a network switch
   */
  id?: string;

  /**
   * Unique identifier of a network switch
   */
  chassisId?: string;

  /**
   * Switch entity extension for better diversity. Should be used together with chassisId.
   */
  port?: string;

  /**
   * Name of a network switch
   */
  name?: string;

  /** */
  site?: SwitchSiteInfo;

  /** */
  emergencyAddress?: EmergencyAddressInfo;

  /** */
  emergencyLocation?: EmergencyLocationInfo;
}

export default SwitchInfo;
