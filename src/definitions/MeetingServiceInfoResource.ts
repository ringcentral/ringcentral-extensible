import { MeetingExternalUserInfoResource, DialInNumberResource } from '.'

class MeetingServiceInfoResource
{
  /**
   */
  uri?: string

  /**
   */
  supportUri?: string

  /**
   */
  intlDialInNumbersUri?: string

  /**
   */
  externalUserInfo?: MeetingExternalUserInfoResource

  /**
   */
  dialInNumbers?: DialInNumberResource[]
}

export default MeetingServiceInfoResource
