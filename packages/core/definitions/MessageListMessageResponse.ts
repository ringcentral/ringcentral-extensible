// Infomation on a message returned within the specified batch
class MessageListMessageResponse {
  /**
   * Internal identifier of a message
   */
  id?: number;

  /**
   * Internal identifier of a batch the message was submitted in
   */
  batchId?: string;

  /**
   * Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format from which the message is sent
   */
  from?: string;

  /**
   * Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format to which a message is sent
   */
  to?: string[];

  /**
   * The time at which the message was created
   */
  creationTime?: string;

  /**
   * The time at which the messages was last updated
   */
  lastModifiedTime?: string;

  /**
   * Current status of a message
   */
  messageStatus?:
    | 'Queued'
    | 'Delivered'
    | 'Sent'
    | 'SendingFailed'
    | 'DeliveryFailed';

  /**
   * Number of segments of a message
   */
  segmentCount?: number;

  /**
   * Text of a message. Returned if the `view` parameter is set to 'Detailed'
   */
  text?: string;

  /**
   * Cost of a message
   */
  cost?: number;

  /**
   * Indicates whether the message was outbound or inbound
   */
  direction?: 'Inbound' | 'Outbound';

  /**
   * The RC error code of the message sending failure reason
   */
  errorCode?: string;
}

export default MessageListMessageResponse;
