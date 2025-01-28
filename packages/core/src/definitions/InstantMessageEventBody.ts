import NotificationRecipientInfo from "./NotificationRecipientInfo";
import SenderInfo from "./SenderInfo";
import MessageAttachmentInfo from "./MessageAttachmentInfo";
import ConversationInfo from "./ConversationInfo";

/**
 * Notification payload body
 */
interface InstantMessageEventBody {
  /**
   * Internal identifier of a message
   */
  id?: string;

  /**
   * Message receiver(s) information
   */
  to?: NotificationRecipientInfo[];

  /** */
  from?: SenderInfo;

  /**
   * Type of message. The default value is 'SMS'
   */
  type?: string;

  /**
   * Message creation date/time in ISO 8601 format including timezone,
   *  for example 2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Date/time when the message was modified in ISO 8601 format including
   *  timezone, for example 2016-03-10T18:07:52.534Z
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
   * Text message direction. Note that for some message types not all
   *  directions are allowed. For example voicemail messages can
   *  be only inbound
   */
  direction?: "Inbound" | "Outbound";

  /**
   * Message availability status. Message in 'Deleted' state is still
   *  preserved with all its attachments and can be restored. 'Purged' means
   *  that all attachments are already deleted and the message itself is about
   *  to be physically deleted shortly
   */
  availability?: "Alive" | "Deleted" | "Purged";

  /**
   * Message subject. It replicates message text which is also returned
   *  as an attachment
   */
  subject?: string;

  /**
   * Message status. Different message types may have different
   *  allowed status values. For outbound faxes the aggregated message status
   *  is returned. If, for outbound message, a status for at least one recipient is 'Queued', then
   *  the 'Queued' value is returned. If a status for at least one recipient is
   *  'SendingFailed', then the 'SendingFailed' value is returned. In other cases
   *  the 'Sent' status is returned
   */
  messageStatus?:
    | "Queued"
    | "Sent"
    | "Delivered"
    | "DeliveryFailed"
    | "SendingFailed"
    | "Received";

  /**
   * Deprecated. Identifier of a conversation the message belongs
   *  to
   */
  conversationId?: string;

  /** */
  conversation?: ConversationInfo;

  /**
   * Internal identifier of a subscription owner extension
   */
  ownerId?: string;
}

export default InstantMessageEventBody;
