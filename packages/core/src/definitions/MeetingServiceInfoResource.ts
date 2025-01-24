import type MeetingExternalUserInfoResource from "./MeetingExternalUserInfoResource";
import type DialInNumberResource from "./DialInNumberResource";

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
