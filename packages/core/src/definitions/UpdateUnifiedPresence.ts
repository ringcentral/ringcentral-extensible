import type UpdateUnifiedPresenceGlip from "./UpdateUnifiedPresenceGlip.js";
import type UpdateUnifiedPresenceTelephony from "./UpdateUnifiedPresenceTelephony.js";

interface UpdateUnifiedPresence {
  /**
   */
  glip?: UpdateUnifiedPresenceGlip;

  /**
   */
  telephony?: UpdateUnifiedPresenceTelephony;
}

export default UpdateUnifiedPresence;
