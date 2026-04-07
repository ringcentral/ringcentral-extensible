import type UnifiedPresenceGlip from "./UnifiedPresenceGlip.js";
import type UnifiedPresenceMeeting from "./UnifiedPresenceMeeting.js";
import type UnifiedPresenceTelephony from "./UnifiedPresenceTelephony.js";

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
