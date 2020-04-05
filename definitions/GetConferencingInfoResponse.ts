import PhoneNumberInfoConferencing from './PhoneNumberInfoConferencing'

class GetConferencingInfoResponse
{
    /// <summary>
    /// Canonical URI of a conferencing
    /// </summary>
    uri: string

    /// <summary>
    /// Determines if host user allows conference participants to join before the host
    /// </summary>
    allowJoinBeforeHost: boolean

    /// <summary>
    /// Access code for a host user
    /// </summary>
    hostCode: string

    /// <summary>
    /// Internal parameter specifying conferencing engine
    /// </summary>
    mode: string

    /// <summary>
    /// Access code for any participant
    /// </summary>
    participantCode: string

    /// <summary>
    /// Primary conference phone number for user's home country returned in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format
    /// </summary>
    phoneNumber: string

    /// <summary>
    /// Short URL leading to the service web page Tap to Join for audio conference bridge
    /// </summary>
    tapToJoinUri: string

    /// <summary>
    /// List of multiple dial-in phone numbers to connect to audio conference service, relevant for user's brand. Each number is given with the country and location information, in order to let the user choose the less expensive way to connect to a conference. The first number in the list is the primary conference number, that is default and domestic
    /// </summary>
    phoneNumbers: PhoneNumberInfoConferencing[]
}

export default GetConferencingInfoResponse