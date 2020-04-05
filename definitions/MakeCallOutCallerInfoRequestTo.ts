// Phone number of the called party. This number corresponds to the 2nd leg of a CallOut call
class MakeCallOutCallerInfoRequestTo
{
    /// <summary>
    /// Phone number in E.164 format
    /// </summary>
    phoneNumber: string

    /// <summary>
    /// Extension number
    /// </summary>
    extensionNumber: string
}

export default MakeCallOutCallerInfoRequestTo