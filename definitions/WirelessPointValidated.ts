import ValidationError from './ValidationError'

class WirelessPointValidated
{
    /// <summary>
    /// Internal identifier of a wireless point
    /// </summary>
    id: string

    /// <summary>
    /// Unique 48-bit identifier of the wireless access point complying with MAC address conventions
    /// </summary>
    bssid: string

    /// <summary>
    /// Validation result status
    /// Enum: Valid, Invalid
    /// </summary>
    status: string

    /// <summary>
    /// </summary>
    errors: ValidationError[]
}

export default WirelessPointValidated