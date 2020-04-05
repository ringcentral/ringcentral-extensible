import MeetingExternalUserInfoResource from './MeetingExternalUserInfoResource'
import DialInNumberResource from './DialInNumberResource'

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