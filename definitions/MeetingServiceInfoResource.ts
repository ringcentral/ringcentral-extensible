import MeetingExternalUserInfoResource from './MeetingExternalUserInfoResource'
import DialInNumberResource from './DialInNumberResource'

class MeetingServiceInfoResource
{
    /// <summary>
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    supportUri: string

    /// <summary>
    /// </summary>
    intlDialInNumbersUri: string

    /// <summary>
    /// </summary>
    externalUserInfo: MeetingExternalUserInfoResource

    /// <summary>
    /// </summary>
    dialInNumbers: DialInNumberResource[]
}

export default MeetingServiceInfoResource