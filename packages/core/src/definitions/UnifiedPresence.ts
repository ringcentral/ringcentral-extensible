import UnifiedPresenceGlip from "./UnifiedPresenceGlip.js";
import UnifiedPresenceTelephony from "./UnifiedPresenceTelephony.js";
import UnifiedPresenceMeeting from "./UnifiedPresenceMeeting.js";

interface UnifiedPresence {
  /**
   * Aggregated presence status of the user
   */
  status?: "Available" | "Offline" | "DND" | "Busy";

  /** */
  glip?: UnifiedPresenceGlip;

  /** */
  telephony?: UnifiedPresenceTelephony;

  /** */
  meeting?: UnifiedPresenceMeeting;
}

export default UnifiedPresence;
