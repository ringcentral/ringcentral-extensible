import {ValidationError} from './index';

class WirelessPointValidated {
  /**
   * Internal identifier of a wireless point
   */
  id?: string;

  /**
   * Unique 48-bit identifier of the wireless access point complying with MAC address conventions
   */
  bssid?: string;

  /**
   * Validation result status
   */
  status?: 'Valid' | 'Invalid';

  /**
   */
  errors?: ValidationError[];
}

export default WirelessPointValidated;
