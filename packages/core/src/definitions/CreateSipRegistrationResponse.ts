import SipRegistrationDeviceInfo from "./SipRegistrationDeviceInfo.js";
import SipInfoResponse from "./SipInfoResponse.js";
import SipFlagsResponse from "./SipFlagsResponse.js";

interface CreateSipRegistrationResponse {
  /**
   * Required
   */
  device?: SipRegistrationDeviceInfo;

  /**
   * SIP settings for device
   * Required
   */
  sipInfo?: SipInfoResponse[];

  /**
   * SIP PSTN settings for device
   */
  sipInfoPstn?: SipInfoResponse[];

  /**
   * Required
   */
  sipFlags?: SipFlagsResponse;

  /** */
  sipErrorCodes?: string[];

  /**
   * Suggested interval in seconds to periodically call SIP-provision API and update the local cache
   * Format: int32
   */
  pollingInterval?: number;
}

export default CreateSipRegistrationResponse;
