import {
  UnifiedPresenceGlip,
  UnifiedPresenceTelephony,
  UnifiedPresenceMeeting,
} from '.';

class UnifiedPresence {
  /**
   * Aggregated presence status of the user
   */
  status?: 'Available' | 'Offline' | 'DND' | 'Busy';

  /**
   */
  glip?: UnifiedPresenceGlip;

  /**
   */
  telephony?: UnifiedPresenceTelephony;

  /**
   */
  meeting?: UnifiedPresenceMeeting;
}

export default UnifiedPresence;
