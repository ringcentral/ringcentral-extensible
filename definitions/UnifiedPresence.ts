import UnifiedPresenceGlip from './UnifiedPresenceGlip'
import UnifiedPresenceTelephony from './UnifiedPresenceTelephony'
import UnifiedPresenceMeeting from './UnifiedPresenceMeeting'

class UnifiedPresence
{
    /**
     * Aggregated presence status of the user
     * Enum: Available, Offline, DND, Busy
     */
    status?: string

    /**
     */
    glip?: UnifiedPresenceGlip

    /**
     */
    telephony?: UnifiedPresenceTelephony

    /**
     */
    meeting?: UnifiedPresenceMeeting
}

export default UnifiedPresence