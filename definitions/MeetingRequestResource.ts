import MeetingScheduleResource from './MeetingScheduleResource'
import HostInfoRequest from './HostInfoRequest'

class MeetingRequestResource
{
    /// <summary>
    /// </summary>
    topic: string

    /// <summary>
    /// Enum: Scheduled, Instant, Recurring
    /// </summary>
    meetingType: string

    /// <summary>
    /// </summary>
    schedule: MeetingScheduleResource

    /// <summary>
    /// </summary>
    password: string

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
    usePersonalMeetingId: boolean

    /// <summary>
    /// </summary>
    audioOptions: string[]
}

export default MeetingRequestResource