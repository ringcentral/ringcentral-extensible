import type UnifiedPresenceGlip from "./UnifiedPresenceGlip.js";
import type UnifiedPresenceTelephony from "./UnifiedPresenceTelephony.js";
import type UnifiedPresenceMeeting from "./UnifiedPresenceMeeting.js";

interface UnifiedPresence {
  /**
   * Aggregated presence status of the user
   */
  status?: "Available" | "Offline" | "DND" | "Busy";

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
