import NotificationRecipientInfo from "./NotificationRecipientInfo.js";
import SenderInfo from "./SenderInfo.js";
import MessageAttachmentInfo from "./MessageAttachmentInfo.js";

/**
 * Notification payload body
 */
interface VoicemailMessageEventBody {
  /**
   * Internal identifier of a message
   * Format: int64
   */
  id?: number;

  /**
   * Message receiver(s) information
   */
  to?: NotificationRecipientInfo[];

  /** */
  from?: SenderInfo;

  /**
   * Type of message
   */
  type?: "Voicemail";

  /**
   * Message creation date/time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   *  format including timezone, for example *2019-03-10T18:07:52.534Z*
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Date/time when a message was modified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   *  format including timezone, for example *2019-03-10T18:07:52.534Z*
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Message read status
   */
  readStatus?: "Read" | "Unread";

  /**
   * Message priority
   */
  priority?: "Normal" | "High";

  /**
   * Message attachment data
   */
  attachments?: MessageAttachmentInfo[];

  /**
   * Message direction (inbound or outbound)
   */
  direction?: "Inbound" | "Outbound";

  /**
   * Message availability status. Message in `Deleted` state is still
   *  preserved with all its attachments and can be restored. `Purged` means
   *  that all attachments are already deleted and the message itself is about
   *  to be physically deleted shortly
   */
  availability?: "Alive" | "Deleted" | "Purged";

  /**
   * Message subject. It replicates message text which is also returned as an attachment
   */
  subject?: string;

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
   * Status of a voicemail to text transcription. Specifies if a voicemail message transcription is already completed or not
   *  If 'VoicemailToText' feature is not activated for account, the 'NotAvailable' value is returned
   */
  vmTranscriptionStatus?:
    | "NotAvailable"
    | "InProgress"
    | "TimedOut"
    | "Completed"
    | "CompletedPartially"
    | "Failed"
    | "Unknown";
}

export default VoicemailMessageEventBody;
