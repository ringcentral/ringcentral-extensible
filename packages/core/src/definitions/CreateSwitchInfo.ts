import SwitchSiteInfo from './SwitchSiteInfo';
import EmergencyAddressInfo from './EmergencyAddressInfo';
import EmergencyLocationInfo from './EmergencyLocationInfo';

interface CreateSwitchInfo {
  /**
   * Unique identifier of a network switch. The supported formats are: XX:XX:XX:XX:XX:XX (symbols 0-9 and A-F) for MAC address and X.X.X.X for IP address (symbols 0-255)
   * Required
   */
  chassisId?: string;

  /**
   * Name of a network switch
   */
  name?: string;

  /**
   */
  site?: SwitchSiteInfo;

  /**
   */
  emergencyAddress?: EmergencyAddressInfo;

  /**
   */
  emergencyLocation?: EmergencyLocationInfo;
}

export default CreateSwitchInfo;
