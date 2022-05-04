import MessageStatusCounts from './MessageStatusCounts';

class MessageStatusesResponse {
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
