import RingOutStatusInfo from './RingOutStatusInfo'

class GetRingOutStatusResponseIntId
{
    /// <summary>
    /// Internal identifier of a RingOut call
    /// </summary>
    id: number

    /// <summary>
    /// </summary>
    uri: string

    /// <summary>
    /// RingOut status information
    /// </summary>
    status: RingOutStatusInfo
}

export default GetRingOutStatusResponseIntId