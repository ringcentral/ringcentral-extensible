import MessageStatusCounts from './MessageStatusCounts';

interface MessageStatusesResponse {
  /**
   */
  queued?: MessageStatusCounts;

  /**
   */
  delivered?: MessageStatusCounts;

  /**
   */
  deliveryFailed?: MessageStatusCounts;

  /**
   */
  sent?: MessageStatusCounts;

  /**
   */
  sendingFailed?: MessageStatusCounts;
}

export default MessageStatusesResponse;
