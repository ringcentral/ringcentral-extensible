import type RejectedRecipientResponseResource from "./RejectedRecipientResponseResource";

/**
 * Batch of A2P SMS messages. This object provides a specification
 * to send message(s) to many recipients. It contains top-level attributes which apply to all messages. In addition
 * to that, it is possible to override this attribute for each message. This
 * way a single API call may be used to send individual messages to many recipients
 */
interface MessageBatchResponse {
  /**
   * Unique identifier of the message batch
   * Example: 12345
   */
  id?: string;

  /**
   * Phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format from which the messages are going to be sent
   * Example: +15551234567
   */
  from?: string;

  /**
   * Total number of messages in the accepted batch
   * Format: int32
   * Example: 5
   */
  batchSize?: number;

  /**
   * Total number of messages currently processed in the batch
   * Format: int32
   * Example: 1
   */
  processedCount?: number;

  /**
   * The last time the batch was processed.
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Current status of a message batch
   * Example: Processing
   */
  status?: "Processing" | "Completed";

  /**
   * The time at which the batch was created
   * Format: date-time
   */
  creationTime?: string;

  /**
   * The list of rejected/invalid recipients
   */
  rejected?: RejectedRecipientResponseResource[];

  /**
   * The estimated batch cost for completed batch. Calculated after batch processing is completed.
   * Format: double
   * Example: 0.007
   */
  cost?: number;
}

export default MessageBatchResponse;
