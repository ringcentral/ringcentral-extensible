import {MeetingExternalUserInfoResource, DialInNumberResource} from './index';

class MeetingServiceInfoResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  supportUri?: string;

  /**
   */
  intlDialInNumbersUri?: string;

  /**
   */
  externalUserInfo?: MeetingExternalUserInfoResource;

  /**
   */
  dialInNumbers?: DialInNumberResource[];
}

export default MeetingServiceInfoResource;
