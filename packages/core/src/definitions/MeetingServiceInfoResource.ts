import MeetingExternalUserInfoResource from "./MeetingExternalUserInfoResource.js";
import DialInNumberResource from "./DialInNumberResource.js";

interface MeetingServiceInfoResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   * Format: uri
   */
  supportUri?: string;

  /**
   * Format: uri
   */
  intlDialInNumbersUri?: string;

  /** */
  externalUserInfo?: MeetingExternalUserInfoResource;

  /** */
  dialInNumbers?: DialInNumberResource[];
}

export default MeetingServiceInfoResource;
