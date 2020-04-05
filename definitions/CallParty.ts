import CallStatusInfo from './CallStatusInfo'
import ParkInfo from './ParkInfo'
import PartyInfo from './PartyInfo'
import OwnerInfo from './OwnerInfo'
import RecordingInfo from './RecordingInfo'

class CallParty
{
    /// <summary>
    /// Internal identifier of a party
    /// </summary>
    id: string

    /// <summary>
    /// Status data of a call session
    /// </summary>
    status: CallStatusInfo

    /// <summary>
    /// Specifies if a call participant is muted or not. **Note:** If a call is also controlled via Hard phone or RingCentral App (not only through the API by calling call control methods) then it cannot be fully muted/unmuted via API only, in this case the action should be duplicated via Hard phone/RC App interfaces
    /// </summary>
    muted: boolean

    /// <summary>
    /// If 'True' then the party is not connected to a session voice conference, 'False' means the party is connected to other parties in a session
    /// </summary>
    standAlone: boolean

    /// <summary>
    /// Call park information
    /// </summary>
    park: ParkInfo

    /// <summary>
    /// Data on a calling party
    /// </summary>
    from: PartyInfo

    /// <summary>
    /// Data on a called party
    /// </summary>
    to: PartyInfo

    /// <summary>
    /// Data on a call owner
    /// </summary>
    owner: OwnerInfo

    /// <summary>
    /// Direction of a call
    /// Enum: Inbound, Outbound
    /// </summary>
    direction: string

    /// <summary>
    /// A party's role in the conference scenarios. For calls of 'Conference' type only
    /// Enum: Host, Participant
    /// </summary>
    conferenceRole: string

    /// <summary>
    /// A party's role in 'Ring Me'/'RingOut' scenarios. For calls of 'Ringout' type only
    /// Enum: Initiator, Target
    /// </summary>
    ringOutRole: string

    /// <summary>
    /// A party's role in 'Ring Me'/'RingOut' scenarios. For calls of 'Ringme' type only
    /// Enum: Initiator, Target
    /// </summary>
    ringMeRole: string

    /// <summary>
    /// Active recordings list
    /// </summary>
    recordings: RecordingInfo[]
}

export default CallParty