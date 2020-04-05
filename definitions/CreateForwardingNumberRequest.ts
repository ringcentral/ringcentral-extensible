import CreateForwardingNumberDeviceInfo from './CreateForwardingNumberDeviceInfo'

class CreateForwardingNumberRequest
{
    /// <summary>
    /// Number assigned to the call flip phone number, corresponds to the shortcut dial number
    /// </summary>
    flipNumber: number

    /// <summary>
    /// Forwarding/Call flip phone number
    /// </summary>
    phoneNumber: string

    /// <summary>
    /// Forwarding/Call flip number title
    /// </summary>
    label: string

    /// <summary>
    /// Forwarding/Call flip phone type. If specified, 'label' attribute value is ignored. The default value is 'Other'
    /// Enum: PhoneLine, Home, Mobile, Work, Other
    /// </summary>
    type: string

    /// <summary>
    /// Reference to the other extension device. Applicable for 'PhoneLine' type only. Cannot be specified together with 'phoneNumber' parameter.
    /// </summary>
    device: CreateForwardingNumberDeviceInfo
}

export default CreateForwardingNumberRequest