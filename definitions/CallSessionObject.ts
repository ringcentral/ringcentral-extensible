import OriginInfo from './OriginInfo'
import CallParty from './CallParty'

class CallSessionObject
{
    /// <summary>
    /// Internal identifier of a call session
    /// </summary>
    id: string

    /// <summary>
    /// Initial data of a call session
    /// </summary>
    origin: OriginInfo

    /// <summary>
    /// For calls of 'Conference' type only
    /// </summary>
    voiceCallToken: string

    /// <summary>
    /// </summary>
    parties: CallParty[]

    /// <summary>
    /// Date and time of the latest session update represented in Unix time format
    /// </summary>
    creationTime: string
}

export default CallSessionObject