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
   * Text of a message
   */
  text?: string;

  /**
   * Time at which the message is scheduled to be sent
   */
  scheduledAt?: string;

  /**
   * Time when this message will not be attempted to be sent, returned if a message is scheduled or in the 'Queued' state
   */
  expiresAt?: string;

  /**
   * Time of message creation
   */
  createdAt?: string;

  /**
   * Time а a message last update
   */
  lastUpdatedAt?: string;

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
}

export default MessageDetailsResponse;
