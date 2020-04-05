import CreateForwardingNumberDeviceInfo from './CreateForwardingNumberDeviceInfo'

class ForwardingNumberInfo
{
    /// <summary>
    /// Internal identifier of a forwarding/call flip phone number
    /// </summary>
    id: string

    /// <summary>
    /// Canonical URI of a forwarding/call flip phone number
    /// </summary>
    uri: string

    /// <summary>
    /// Forwarding/Call flip phone number
    /// </summary>
    phoneNumber: string

    /// <summary>
    /// Forwarding/Call flip number title
    /// </summary>
    label: string

    /// <summary>
    /// Type of option this phone number is used for. Multiple values are accepted
    /// </summary>
    features: string[]

    /// <summary>
    /// Number assigned to the call flip phone number, corresponds to the shortcut dial number
    /// </summary>
    flipNumber: string

    /// <summary>
    /// Forwarding device information
    /// </summary>
    device: CreateForwardingNumberDeviceInfo

    /// <summary>
    /// Forwarding phone number type
    /// Enum: Home, Mobile, Work, PhoneLine, Outage, Other
    /// </summary>
    type: string
}

export default ForwardingNumberInfo