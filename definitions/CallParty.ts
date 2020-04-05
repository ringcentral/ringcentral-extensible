import CallStatusInfo from './CallStatusInfo'
import ParkInfo from './ParkInfo'
import PartyInfo from './PartyInfo'
import OwnerInfo from './OwnerInfo'
import RecordingInfo from './RecordingInfo'

class CallParty
{
    /**
     * Internal identifier of a party
     */
    id: string

    /**
     * Status data of a call session
     */
    status: CallStatusInfo

    /**
     * Specifies if a call participant is muted or not. **Note:** If a call is also controlled via Hard phone or RingCentral App (not only through the API by calling call control methods) then it cannot be fully muted/unmuted via API only, in this case the action should be duplicated via Hard phone/RC App interfaces
     */
    muted: boolean

    /**
     * If 'True' then the party is not connected to a session voice conference, 'False' means the party is connected to other parties in a session
     */
    standAlone: boolean

    /**
     * Call park information
     */
    park: ParkInfo

    /**
     * Data on a calling party
     */
    from: PartyInfo

    /**
     * Data on a called party
     */
    to: PartyInfo

    /**
     * Data on a call owner
     */
    owner: OwnerInfo

    /**
     * Direction of a call
     * Enum: Inbound, Outbound
     */
    direction: string

    /**
     * A party's role in the conference scenarios. For calls of 'Conference' type only
     * Enum: Host, Participant
     */
    conferenceRole: string

    /**
     * A party's role in 'Ring Me'/'RingOut' scenarios. For calls of 'Ringout' type only
     * Enum: Initiator, Target
     */
    ringOutRole: string

    /**
     * A party's role in 'Ring Me'/'RingOut' scenarios. For calls of 'Ringme' type only
     * Enum: Initiator, Target
     */
    ringMeRole: string

    /**
     * Active recordings list
     */
    recordings: RecordingInfo[]
}

export default CallParty