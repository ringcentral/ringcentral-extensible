import UnifiedPresence from './UnifiedPresence'

class UnifiedPresenceListEntry
{
    /// <summary>
    /// Internal identifier of the resource
    /// </summary>
    resourceId: string

    /// <summary>
    /// Status code of resource retrieval
    /// </summary>
    status: number

    /// <summary>
    /// </summary>
    body: UnifiedPresence
}

export default UnifiedPresenceListEntry