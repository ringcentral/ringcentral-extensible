import UnifiedPresenceGlip from './UnifiedPresenceGlip'
import UnifiedPresenceTelephony from './UnifiedPresenceTelephony'
import UnifiedPresenceMeeting from './UnifiedPresenceMeeting'

class UnifiedPresence
{
    /// <summary>
    /// Aggregated presence status of the user
    /// Enum: Available, Offline, DND, Busy
    /// </summary>
    status: string

    /// <summary>
    /// </summary>
    glip: UnifiedPresenceGlip

    /// <summary>
    /// </summary>
    telephony: UnifiedPresenceTelephony

    /// <summary>
    /// </summary>
    meeting: UnifiedPresenceMeeting
}

export default UnifiedPresence