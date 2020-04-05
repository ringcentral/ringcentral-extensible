import SipRegistrationDeviceInfo from './SipRegistrationDeviceInfo'
import SIPInfoResponse from './SIPInfoResponse'
import SIPFlagsResponse from './SIPFlagsResponse'

class CreateSipRegistrationResponse
{
  /**
   */
  device?: SipRegistrationDeviceInfo

  /**
   * SIP settings for device
   * Required
   */
  sipInfo?: SIPInfoResponse[]

  /**
   * SIP PSTN settings for device
   */
  sipInfoPstn?: SIPInfoResponse[]

  /**
   * SIP flags data
   * Required
   */
  sipFlags?: SIPFlagsResponse[]

  /**
   */
  sipErrorCodes?: string[]
}

export default CreateSipRegistrationResponse
