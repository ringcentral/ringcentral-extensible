class UpdateForwardingNumberRequest
{
    /// <summary>
    /// Forwarding/Call flip phone number
    /// </summary>
    phoneNumber: string

    /// <summary>
    /// Forwarding/Call flip number title
    /// </summary>
    label: string

    /// <summary>
    /// Number assigned to the call flip phone number, corresponds to the shortcut dial number
    /// </summary>
    flipNumber: string

    /// <summary>
    /// Forwarding phone number type
    /// Enum: Home, Mobile, Work, PhoneLine, Outage, Other
    /// </summary>
    type: string
}

export default UpdateForwardingNumberRequest