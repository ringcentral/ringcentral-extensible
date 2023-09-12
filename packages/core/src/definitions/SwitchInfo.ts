import SwitchSiteInfo from './SwitchSiteInfo';
import SwitchInfoEmergencyAddress from './SwitchInfoEmergencyAddress';
import EmergencyLocationInfo from './EmergencyLocationInfo';

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

  /**
   */
  site?: SwitchSiteInfo;

  /**
   * Emergency address information (or information assigned to the
 *  switch or wireless point - in case of using them). Only one of a pair
 *  `emergencyAddress` or `emergencyLocationId` should be specified,
 *  otherwise an error is returned
   */
  emergencyAddress?: SwitchInfoEmergencyAddress;

  /**
   */
  emergencyLocation?: EmergencyLocationInfo;
}

export default SwitchInfo;
