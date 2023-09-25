import type UpdateUnifiedPresenceGlip from './UpdateUnifiedPresenceGlip';
import type UpdateUnifiedPresenceTelephony from './UpdateUnifiedPresenceTelephony';

interface UpdateUnifiedPresence {
  /**
   */
  glip?: UpdateUnifiedPresenceGlip;

  /**
   */
  telephony?: UpdateUnifiedPresenceTelephony;
}

export default UpdateUnifiedPresence;
