import UpdateUnifiedPresenceGlip from './UpdateUnifiedPresenceGlip';
import UpdateUnifiedPresenceTelephony from './UpdateUnifiedPresenceTelephony';

interface UpdateUnifiedPresence {
  /**
   */
  glip?: UpdateUnifiedPresenceGlip;

  /**
   */
  telephony?: UpdateUnifiedPresenceTelephony;
}

export default UpdateUnifiedPresence;
