import type EmergencyAddressAutoUpdateSiteInfo from './EmergencyAddressAutoUpdateSiteInfo';
import type WirelessPointInfoEmergencyAddress from './WirelessPointInfoEmergencyAddress';
import type ERLLocationInfo from './ERLLocationInfo';

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
   * Emergency address information (or information assigned to the
   *  switch or wireless point - in case of using them). Only one of a pair
   *  `emergencyAddress` or `emergencyLocationId` should be specified,
   *  otherwise an error is returned
   * Required
   */
  emergencyAddress?: WirelessPointInfoEmergencyAddress;

  /**
   */
  emergencyLocation?: ERLLocationInfo;

  /**
   * Deprecated. Emergency response location (address) internal identifier. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
   */
  emergencyLocationId?: string;
}

export default WirelessPointInfo;
