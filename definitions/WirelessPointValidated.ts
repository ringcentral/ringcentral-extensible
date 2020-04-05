import ValidationError from './ValidationError'

class WirelessPointValidated
{
    /**
     * Internal identifier of a wireless point
     */
    id: string

    /**
     * Unique 48-bit identifier of the wireless access point complying with MAC address conventions
     */
    bssid: string

    /**
     * Validation result status
     * Enum: Valid, Invalid
     */
    status: string

    /**
     */
    errors: ValidationError[]
}

export default WirelessPointValidated