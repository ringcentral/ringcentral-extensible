import SwitchSiteInfo from "./SwitchSiteInfo";
import EmergencyAddressInfo from "./EmergencyAddressInfo";

interface UpdateSwitchInfo {
  /**
   * Internal identifier of a switch
   */
  id?: string;

  /**
   * Unique identifier of a network switch. The supported formats
   *  are: XX:XX:XX:XX:XX:XX (symbols 0-9 and A-F) for MAC address and X.X.X.X
   *  for IP address (symbols 0-255)
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
}

export default UpdateSwitchInfo;
