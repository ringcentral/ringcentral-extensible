class MakeRingOutCallerInfoRequestFrom
{
    /// <summary>
    /// Phone number in E.164 format
    /// </summary>
    phoneNumber: string

    /// <summary>
    /// Internal identifier of a forwarding number; returned in response as an 'id' field value. Can be specified instead of the phoneNumber attribute
    /// </summary>
    forwardingNumberId: string
}

export default MakeRingOutCallerInfoRequestFrom