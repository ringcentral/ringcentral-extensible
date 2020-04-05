import MeetingLinks from './MeetingLinks'
import MeetingScheduleResource from './MeetingScheduleResource'
import HostInfoRequest from './HostInfoRequest'

class MeetingResponseResource
{
    /// <summary>
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    uuid: string

    /// <summary>
    /// </summary>
    id: string

    /// <summary>
    /// </summary>
    topic: string

    /// <summary>
    /// Enum: Scheduled, Instant, Recurring
    /// </summary>
    meetingType: string

    /// <summary>
    /// </summary>
    password: string

    /// <summary>
    /// </summary>
    h323Password: string

    /// <summary>
    /// </summary>
    status: string

    /// <summary>
    /// </summary>
    links: MeetingLinks

    /// <summary>
    /// </summary>
    schedule: MeetingScheduleResource

    /// <summary>
    /// </summary>
    host: HostInfoRequest

    /// <summary>
    /// </summary>
    allowJoinBeforeHost: boolean

    /// <summary>
    /// </summary>
    startHostVideo: boolean

    /// <summary>
    /// </summary>
    startParticipantsVideo: boolean

    /// <summary>
    /// </summary>
    audioOptions: string[]
}

export default MeetingResponseResource