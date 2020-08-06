import {GlipAPNSInfo, GCMInfo} from '.';

class GlipUnreadMessageCountEvent {
  /**
   * Universally unique identifier of a notification
   */
  uuid?: string;

  /**
   * Apple notification data
   */
  pn_apns?: GlipAPNSInfo;

  /**
   * GCM data
   */
  pn_gcm?: GCMInfo;

  /**
   * Internal identifier of a subscription owner extension
   */
  ownerId?: string;
}

export default GlipUnreadMessageCountEvent;
