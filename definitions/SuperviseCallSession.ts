import PartyInfo from './PartyInfo'
import OwnerInfo from './OwnerInfo'
import CallStatusInfo from './CallStatusInfo'

class SuperviseCallSession
{
    /// <summary>
    /// Information about a call party that monitors a call
    /// </summary>
    from: PartyInfo

    /// <summary>
    /// Information about a call party that is monitored
    /// </summary>
    to: PartyInfo

    /// <summary>
    /// Direction of a call
    /// Enum: Outbound, Inbound
    /// </summary>
    direction: string

    /// <summary>
    /// Internal identifier of a party that monitors a call
    /// </summary>
    id: string

    /// <summary>
    /// Internal identifier of an account that monitors a call
    /// </summary>
    accountId: string

    /// <summary>
    /// Internal identifier of an extension that monitors a call
    /// </summary>
    extensionId: string

    /// <summary>
    /// Specifies if a call participant is muted or not. **Note:** If a call is also controlled via Hard phone or RingCentral App (not only through the API by calling call control methods) then it cannot be fully muted/unmuted via API only, in this case the action should be duplicated via Hard phone/RC App interfaces
    /// </summary>
    muted: boolean

    /// <summary>
    /// Data on a call owner
    /// </summary>
    owner: OwnerInfo

    /// <summary>
    /// If 'True' then the party is not connected to a session voice conference, 'False' means the party is connected to other parties in a session
    /// </summary>
    standAlone: boolean

    /// <summary>
    /// </summary>
    status: CallStatusInfo
}

export default SuperviseCallSession