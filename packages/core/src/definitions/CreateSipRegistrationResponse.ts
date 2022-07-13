import SipRegistrationDeviceInfo from './SipRegistrationDeviceInfo';
import SIPInfoResponse from './SIPInfoResponse';
import SIPFlagsResponse from './SIPFlagsResponse';

interface CreateSipRegistrationResponse {
  /**
   */
  device?: SipRegistrationDeviceInfo;

  /**
   * SIP settings for device
   * Required
   */
  sipInfo?: SIPInfoResponse[];

  /**
   * SIP PSTN settings for device
   */
  sipInfoPstn?: SIPInfoResponse[];

  /**
   * Required
   */
  sipFlags?: SIPFlagsResponse;

  /**
   */
  sipErrorCodes?: string[];
}

export default CreateSipRegistrationResponse;
