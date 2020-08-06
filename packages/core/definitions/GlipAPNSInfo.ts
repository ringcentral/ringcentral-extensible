import {APSInfo, GlipUnreadMessageCountInfo} from '.';

class GlipAPNSInfo {
  /**
   * Apple Push Notification Service Info
   */
  aps?: APSInfo;

  /**
   * Datetime of a call action in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example 2016-03-10T18:07:52.534Z
   */
  timestamp?: string;

  /**
   * Universally unique identifier of a notification
   */
  uuid?: string;

  /**
   * Event filter URI
   */
  event?: string;

  /**
   * Internal identifier of a subscription
   */
  subscriptionId?: string;

  /**
   * Unread messages data
   */
  body?: GlipUnreadMessageCountInfo;
}

export default GlipAPNSInfo;
