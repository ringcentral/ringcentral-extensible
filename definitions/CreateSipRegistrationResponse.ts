import SipRegistrationDeviceInfo from './SipRegistrationDeviceInfo'
import SIPInfoResponse from './SIPInfoResponse'
import SIPFlagsResponse from './SIPFlagsResponse'

class CreateSipRegistrationResponse
{
    /// <summary>
    /// </summary>
    device: SipRegistrationDeviceInfo

    /// <summary>
    /// SIP settings for device
    /// Required
    /// </summary>
    sipInfo: SIPInfoResponse[]

    /// <summary>
    /// SIP PSTN settings for device
    /// </summary>
    sipInfoPstn: SIPInfoResponse[]

    /// <summary>
    /// SIP flags data
    /// Required
    /// </summary>
    sipFlags: SIPFlagsResponse[]

    /// <summary>
    /// </summary>
    sipErrorCodes: string[]
}

export default CreateSipRegistrationResponse