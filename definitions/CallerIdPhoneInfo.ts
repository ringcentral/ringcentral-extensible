class CallerIdPhoneInfo
{
    /// <summary>
    /// Internal identifier of a phone number
    /// </summary>
    id: string

    /// <summary>
    /// Link to a phone number resource
    /// </summary>
    uri: string

    /// <summary>
    /// Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) (with '+' sign) format
    /// </summary>
    phoneNumber: string
}

export default CallerIdPhoneInfo