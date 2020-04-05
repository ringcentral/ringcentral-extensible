import PartyInfo from './PartyInfo'
import OwnerInfo from './OwnerInfo'
import CallStatusInfo from './CallStatusInfo'

class PartySuperviseResponse
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
    /// Specifies if a call party is muted
    /// </summary>
    muted: boolean

    /// <summary>
    /// Deprecated. Infromation a call owner
    /// </summary>
    owner: OwnerInfo

    /// <summary>
    /// Specifies if a device is stand-alone
    /// </summary>
    standAlone: boolean

    /// <summary>
    /// </summary>
    status: CallStatusInfo
}

export default PartySuperviseResponse