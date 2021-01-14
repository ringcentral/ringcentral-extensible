import {
  SipRegistrationDeviceInfo,
  SIPInfoResponse,
  SIPFlagsResponse,
} from './index';

class CreateSipRegistrationResponse {
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
