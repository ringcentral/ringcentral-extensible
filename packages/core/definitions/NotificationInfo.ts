import { AlertInfo } from './index';

/**
 * Information on a notification
 */
class NotificationInfo {
  /**
   */
  alert?: AlertInfo;

  /**
   * Number of incoming messages
   */
  badge?: string;

  /**
   * Message sound
   */
  sound?: string;

  /**
   * Content availability
   */
  'content-available'?: string;

  /**
   * Category of a message
   */
  category?: string;
}
export default NotificationInfo;
