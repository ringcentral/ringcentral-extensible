import MessageStatusCounts from './MessageStatusCounts';

/**
 * The messages status object with details of each status
*/
interface MessageStatuses {
  /**
   */
  Queued?: MessageStatusCounts;

  /**
   */
  Delivered?: MessageStatusCounts;

  /**
   */
  DeliveryFailed?: MessageStatusCounts;

  /**
   */
  Sent?: MessageStatusCounts;

  /**
   */
  SendingFailed?: MessageStatusCounts;
}

export default MessageStatuses;
