import APSInfo from "./APSInfo.js";

interface IncomingCallEvent {
  /** */
  aps?: APSInfo;

  /**
   * Event filter name
   */
  event?: string;

  /**
   * Universally unique identifier of a notification
   */
  uuid?: string;

  /**
   * Internal identifier of a subscription
   */
  subscriptionId?: string;

  /**
   * The timestamp of a call action in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example 2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  timestamp?: string;

  /**
   * Internal identifier of an extension
   * Default: ~
   */
  extensionId?: string;

  /**
   * Calling action, for example 'StartRing'
   */
  action?: string;

  /**
   * Identifier of a call session
   */
  sessionId?: string;

  /**
   * Identifier of a server
   */
  serverId?: string;

  /**
   * Phone number of a caller. For GCM transport type '_from' property should be used
   */
  from?: string;

  /**
   * Caller name
   */
  fromName?: string;

  /**
   * Phone number of a callee
   */
  to?: string;

  /**
   * Callee name
   */
  toName?: string;

  /**
   * Unique identifier of a session
   */
  sid?: string;

  /**
   * SIP proxy registration name
   */
  toUrl?: string;

  /**
   * User data
   */
  srvLvl?: string;

  /**
   * User data
   */
  srvLvlExt?: string;

  /**
   * File containing recorded caller name
   */
  recUrl?: string;

  /**
   * Notification lifetime value in seconds, the default value is 30 seconds
   * Format: int32
   */
  pn_ttl?: number;

  /**
   * Internal identifier of a subscription owner extension
   */
  ownerId?: string;
}

export default IncomingCallEvent;
