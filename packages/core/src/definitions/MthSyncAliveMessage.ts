import type MessageAttachmentResponseEntry from "./MessageAttachmentResponseEntry.js";
import type MthSyncAliveMessageAuthor from "./MthSyncAliveMessageAuthor.js";

interface MthSyncAliveMessage {
  /**
   * Required
   */
  recordType?: "AliveMessage";

  /**
   * Internal identifier of a message
   * Required
   */
  id?: string;

  /**
   * Internal identifier of a message thread
   * Required
   */
  threadId?: string;

  /**
   * Thread/message availability
   * Required
   */
  availability?: "Alive" | "Deleted";

  /**
   * Message creation date/time
   * Required
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Message direction (inbound or outbound)
   * Required
   */
  direction?: "Inbound" | "Outbound";

  /**
   * Message last modification date/time
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Message status. Different message types may have different
   *  allowed status values. For outbound faxes the aggregated message status
   *  is returned. If, for multi-recipient outbound message, a status for
   *  at least one recipient is `Queued`, then the `Queued` value is returned.
   *  If a status for at least one recipient is `SendingFailed`,
   *  then the 'SendingFailed' value is returned. In other cases,
   *  the `Sent` status is returned
   */
  messageStatus?:
    | "Queued"
    | "Sent"
    | "Delivered"
    | "DeliveryFailed"
    | "SendingFailed"
    | "Received";

  /**
   * Message or note text
   * Example: Hello, how are you doing today?
   */
  text?: string;

  /**
   * Message attachments (if any)
   */
  attachments?: MessageAttachmentResponseEntry[];

  /**
   * Message author (for outbound messages only)
   */
  author?: MthSyncAliveMessageAuthor;
}

export default MthSyncAliveMessage;
