import AutomaticLocationUpdatesModelInfo from './AutomaticLocationUpdatesModelInfo'
import AutomaticLocationUpdatesPhoneLine from './AutomaticLocationUpdatesPhoneLine'

class AutomaticLocationUpdatesDeviceInfo
{
  /**
   * Internal identifier of a device
   */
  id?: string

  /**
   * Device type
   * Default: HardPhone
   * Enum: HardPhone, SoftPhone, OtherPhone
   */
  type?: string

  /**
   * Serial number for HardPhone (is returned only when the phone is shipped and provisioned)
   */
  serial?: string

  /**
   * Specifies if Automatic Location Updates feature is enabled
   */
  featureEnabled?: boolean

  /**
   * Device name
   */
  name?: string

  /**
   * HardPhone model information
   */
  model?: AutomaticLocationUpdatesModelInfo

  /**
   * Site data
   */
  site?: string

  /**
   * Phone lines information
   */
  phoneLines?: AutomaticLocationUpdatesPhoneLine[]
}

export default AutomaticLocationUpdatesDeviceInfo
