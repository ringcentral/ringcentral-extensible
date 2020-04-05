import RingOutStatusInfo from './RingOutStatusInfo'

class GetRingOutStatusResponse
{
    /// <summary>
    /// Internal identifier of a RingOut call
    /// </summary>
    id: string

    /// <summary>
    /// </summary>
    uri: string

    /// <summary>
    /// RingOut status information
    /// </summary>
    status: RingOutStatusInfo
}

export default GetRingOutStatusResponse