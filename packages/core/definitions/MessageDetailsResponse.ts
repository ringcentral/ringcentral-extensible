// Detailed information on a message
class MessageDetailsResponse {
  /**
   * Internal identifier of a message
   */
  id?: string;

  /**
   * Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format from which the message was sent
   */
  from?: string;

  /**
   * List of phone numbers in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format to which the message was sent
   */
  to?: string[];

  /**
   * Text of a message, maximum number of characters is 1000
   */
  text?: string;

  /**
   * The time when this is message was created.
   */
  creationTime?: string;

  /**
   * The time when this message was last updated.
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
   * Cost of a message
   */
  cost?: number;

  /**
   * The batch in which the message was submitted
   */
  batchId?: string;

  /**
   * Indicates whether the message is outbound or inbound
   */
  direction?: 'Inbound' | 'Outbound';

  /**
   * RC error code of the message sending failure reason
   */
  errorCode?: string;
}

export default MessageDetailsResponse;
