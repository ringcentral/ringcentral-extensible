import {AlertInfo} from './index';

class NotificationInfo {
  /**
   * Alert information
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
