import UpdateUnifiedPresenceGlip from "./UpdateUnifiedPresenceGlip.js";
import UpdateUnifiedPresenceTelephony from "./UpdateUnifiedPresenceTelephony.js";

interface UpdateUnifiedPresence {
  /** */
  glip?: UpdateUnifiedPresenceGlip;

  /** */
  telephony?: UpdateUnifiedPresenceTelephony;
}

export default UpdateUnifiedPresence;
