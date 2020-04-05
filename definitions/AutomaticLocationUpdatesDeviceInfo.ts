import AutomaticLocationUpdatesModelInfo from './AutomaticLocationUpdatesModelInfo'
import AutomaticLocationUpdatesPhoneLine from './AutomaticLocationUpdatesPhoneLine'

class AutomaticLocationUpdatesDeviceInfo
{
    /// <summary>
    /// Internal identifier of a device
    /// </summary>
    id: string

    /// <summary>
    /// Device type
    /// Default: HardPhone
    /// Enum: HardPhone, SoftPhone, OtherPhone
    /// </summary>
    type: string

    /// <summary>
    /// Serial number for HardPhone (is returned only when the phone is shipped and provisioned)
    /// </summary>
    serial: string

    /// <summary>
    /// Specifies if Automatic Location Updates feature is enabled
    /// </summary>
    featureEnabled: boolean

    /// <summary>
    /// Device name
    /// </summary>
    name: string

    /// <summary>
    /// HardPhone model information
    /// </summary>
    model: AutomaticLocationUpdatesModelInfo

    /// <summary>
    /// Site data
    /// </summary>
    site: string

    /// <summary>
    /// Phone lines information
    /// </summary>
    phoneLines: AutomaticLocationUpdatesPhoneLine[]
}

export default AutomaticLocationUpdatesDeviceInfo