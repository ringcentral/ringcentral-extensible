import type AutomaticLocationUpdatesModelInfo from './AutomaticLocationUpdatesModelInfo';
import type AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo';
import type AutomaticLocationUpdatesPhoneLine from './AutomaticLocationUpdatesPhoneLine';

interface AutomaticLocationUpdatesDeviceInfo {
  /**
   * Internal identifier of a device
   */
  id?: string;

  /**
   * Device type
   * Default: HardPhone
   */
  type?: 'HardPhone' | 'SoftPhone' | 'OtherPhone';

  /**
   * Serial number for HardPhone (is returned only when the phone is shipped and provisioned)
   */
  serial?: string;

  /**
   * Specifies if Automatic Location Updates feature is enabled
   */
  featureEnabled?: boolean;

  /**
   * Device name
   */
  name?: string;

  /**
   */
  model?: AutomaticLocationUpdatesModelInfo;

  /**
   */
  site?: AutomaticLocationUpdatesSiteInfo;

  /**
   * Phone lines information
   */
  phoneLines?: AutomaticLocationUpdatesPhoneLine[];
}

export default AutomaticLocationUpdatesDeviceInfo;
