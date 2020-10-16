// Infommation on a message returned within the specified batch
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
   * Time of message creation
   */
  createdAt?: string;

  /**
   * Time of the message(s) last update
   */
  lastUpdatedAt?: string;

  /**
   * Current status of a message
   */
  messageStatus?: string;

  /**
   * Number of segments of a message
   */
  segmentCount?: number;

  /**
   * Cost of a message
   */
  cost?: number;
}

export default MessageListMessageResponse;
