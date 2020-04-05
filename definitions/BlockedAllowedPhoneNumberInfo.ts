// Information on a blocked/allowed phone number
class BlockedAllowedPhoneNumberInfo
{
    /// <summary>
    /// Link to a blocked/allowed phone number
    /// </summary>
    uri: string

    /// <summary>
    /// Internal identifier of a blocked/allowed phone number
    /// </summary>
    id: string

    /// <summary>
    /// A blocked/allowed phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format
    /// </summary>
    phoneNumber: string

    /// <summary>
    /// Custom name of a blocked/allowed phone number
    /// </summary>
    label: string

    /// <summary>
    /// Status of a phone number
    /// Enum: Blocked, Allowed
    /// </summary>
    status: string
}

export default BlockedAllowedPhoneNumberInfo