import {DeviceEmergencyAddress, DeviceEmergencyLocationInfo} from '.';

class DeviceEmergencyInfo {
  /**
   */
  address?: DeviceEmergencyAddress;

  /**
   * Company emergency response location details
   */
  location?: DeviceEmergencyLocationInfo;

  /**
   * Specifies if emergency address is out of country
   */
  outOfCountry?: boolean;

  /**
   * Emergency address status
   */
  addressStatus?: 'Valid' | 'Invalid';

  /**
   * Resulting status of emergency address synchronization. Returned if `syncEmergencyAddress` parameter is set to 'True'
   */
  syncStatus?:
    | 'Verified'
    | 'Updated'
    | 'Deleted'
    | 'NotRequired'
    | 'Unsupported'
    | 'Failed';

  /**
   * Ability to register new emergency address for a phone line using devices sharing this line or only main device (line owner)
   */
  addressEditableStatus?: 'MainDevice' | 'AnyDevice';
}

export default DeviceEmergencyInfo;
