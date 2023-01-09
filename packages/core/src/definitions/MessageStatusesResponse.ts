import MessageStatuses from './MessageStatuses';

/**
 * The statuses of the messages filtered by batch/account/phone numbers.
*/
interface MessageStatusesResponse {
  /**
   */
  messageStatuses?: MessageStatuses;
}

export default MessageStatusesResponse;
