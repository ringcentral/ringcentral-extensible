import type MessageAttachmentInfo from "./MessageAttachmentInfo";
import type ConversationInfo from "./ConversationInfo";
import type MessageStoreCallerInfoResponseFrom from "./MessageStoreCallerInfoResponseFrom";
import type MessageStoreCallerInfoResponseTo from "./MessageStoreCallerInfoResponseTo";

interface GetInternalTextMessageInfoResponse {
  /**
   * Internal identifier of a message
   * Format: int64
   */
  id?: number;

  /**
   * Canonical URI of a message
   * Format: uri
   */
  uri?: string;

  /**
   * The list of message attachments
   */
  attachments?: MessageAttachmentInfo[];

  /**
   * Message availability status. Message in 'Deleted' state is still
   *  preserved with all its attachments and can be restored. 'Purged' means
   *  that all attachments are already deleted and the message itself is about
   *  to be physically deleted shortly
   */
  availability?: "Alive" | "Deleted" | "Purged";

  /**
   * SMS and Pager only. Identifier of a conversation that the message
   *  belongs to
   * Format: int64
   */
  conversationId?: number;

  /** */
  conversation?: ConversationInfo;

  /**
   * Message creation date/time in ISO 8601 format including timezone,
   *  for example 2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Text message direction. Note that for some message types not all
   *  directions are allowed. For example voicemail messages can
   *  be only inbound
   */
  direction?: "Inbound" | "Outbound";

  /** */
  from?: MessageStoreCallerInfoResponseFrom;

  /**
   * Date/time when the message was modified on server in ISO
   *  8601 format including timezone, for example 2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  lastModifiedTime?: string;

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
   * Pager only. `true` if at least one of a message recipients
   *  is 'Department' extension
   */
  pgToDepartment?: boolean;

  /**
   * Message priority
   */
  priority?: "Normal" | "High";

  /**
   * Message read status
   */
  readStatus?: "Read" | "Unread";

  /**
   * Message subject. For SMS and Pager messages it replicates message
   *  text which is also returned as an attachment
   */
  subject?: string;

  /**
   * Recipient information
   */
  to?: MessageStoreCallerInfoResponseTo[];

  /**
   * Message type
   */
  type?: "Fax" | "SMS" | "VoiceMail" | "Pager" | "Text";
}

export default GetInternalTextMessageInfoResponse;
