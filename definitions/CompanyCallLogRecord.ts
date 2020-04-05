import ExtensionInfoCallLog from './ExtensionInfoCallLog'
import CallLogCallerInfo from './CallLogCallerInfo'
import CallLogRecordingInfo from './CallLogRecordingInfo'
import CallLogRecordLegInfo from './CallLogRecordLegInfo'
import BillingInfo from './BillingInfo'

class CompanyCallLogRecord
{
    /// <summary>
    /// Internal identifier of a cal log record
    /// </summary>
    id: string

    /// <summary>
    /// Canonical URI of a call log record
    /// </summary>
    uri: string

    /// <summary>
    /// Internal identifier of a call session
    /// </summary>
    sessionId: string

    /// <summary>
    /// </summary>
    extension: ExtensionInfoCallLog

    /// <summary>
    /// Telephony identifier of a call session
    /// </summary>
    telephonySessionId: string

    /// <summary>
    /// Call transport
    /// Enum: PSTN, VoIP
    /// </summary>
    transport: string

    /// <summary>
    /// Caller information
    /// </summary>
    from: CallLogCallerInfo

    /// <summary>
    /// Callee information
    /// </summary>
    to: CallLogCallerInfo

    /// <summary>
    /// Call type
    /// Enum: Voice, Fax
    /// </summary>
    type: string

    /// <summary>
    /// Call direction
    /// Enum: Inbound, Outbound
    /// </summary>
    direction: string

    /// <summary>
    /// Indicates whether the record is deleted. Returned for deleted records, for ISync requests
    /// </summary>
    deleted: boolean

    /// <summary>
    /// Action description of the call operation
    /// Enum: Unknown, Phone Login, Calling Card, VoIP Call, Phone Call, Paging, Hunting, Call Park, Monitoring, Text Relay, External Application, Park Location, CallOut-CallMe, Conference Call, Move, RC Meetings, Accept Call, FindMe, FollowMe, RingMe, Transfer, Call Return, Ring Directly, RingOut Web, RingOut PC, RingOut Mobile, Emergency, E911 Update, Support, Incoming Fax, Outgoing Fax
    /// </summary>
    action: string

    /// <summary>
    /// Status description of the call operation
    /// Enum: Unknown, Accepted, Call connected, In Progress, Voicemail, Reply, Missed, Busy, Rejected, No Answer, Hang Up, Blocked, Suspended account, Call Failed, Call Failure, Internal Error, IP Phone Offline, No Calling Credit, Restricted Number, Wrong Number, Answered Not Accepted, Stopped, International Disabled, International Restricted, Abandoned, Declined, Received, Fax on Demand, Partial Receive, Receive Error, Fax Receipt Error, Sent, Fax Partially Sent, Send Error, Fax Not Sent, Fax Poor Line
    /// </summary>
    result: string

    /// <summary>
    /// Enum: Accepted, Connected, line Busy, Not Answered, No Answer, Hang Up, Stopped, Internal Error, No Credit, Restricted Number, Wrong Number, International Disabled, International Restricted, Bad Number, Info 411 Restricted, Customer 611 Restricted, No Digital Line, Failed Try Again, Max Call Limit, Too Many Calls, Calls Not Accepted, Number Not Allowed, Number Blocked, Number Disabled, Resource Error, Call Loop, Fax Not Received, Fax Partially Sent, Fax Not Sent, Fax Poor Line, Fax Prepare Error, Fax Save Error, Fax Send Error
    /// </summary>
    reason: string

    /// <summary>
    /// </summary>
    reasonDescription: string

    /// <summary>
    /// The call start datetime in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601] format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    startTime: string

    /// <summary>
    /// Call duration in seconds
    /// </summary>
    duration: number

    /// <summary>
    /// Call recording data. Returned if a call is recorded
    /// </summary>
    recording: CallLogRecordingInfo

    /// <summary>
    /// Indicates that the recording is too short and therefore wouldn't be returned. The flag is not returned if the value is false
    /// </summary>
    shortRecording: boolean

    /// <summary>
    /// For 'Detailed' view only. Leg description
    /// </summary>
    legs: CallLogRecordLegInfo[]

    /// <summary>
    /// Billing information related to the call. Returned for 'Detailed' view only
    /// </summary>
    billing: BillingInfo

    /// <summary>
    /// For 'Detailed' view only. The datetime when the call log record was modified in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601] format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    lastModifiedTime: string
}

export default CompanyCallLogRecord