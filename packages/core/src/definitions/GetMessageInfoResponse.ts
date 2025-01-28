import MessageAttachmentInfo from "./MessageAttachmentInfo";
import ConversationInfo from "./ConversationInfo";
import MessageStoreCallerInfoResponseFrom from "./MessageStoreCallerInfoResponseFrom";
import MessageStoreCallerInfoResponseTo from "./MessageStoreCallerInfoResponseTo";
import VoicemailOwnerResource from "./VoicemailOwnerResource";

interface GetMessageInfoResponse {
  /**
   * Internal identifier of a message
   * Format: int64
   * Example: 1724099032020
   */
  id?: number;

  /**
   * Canonical URI of a message
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of an extension
   */
  extensionId?: string;

  /**
   * List of message attachments
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
   * SMS and Pager only. Identifier of a conversation the message
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

  /**
   * Fax only. Page count in a fax message
   * Format: int32
   */
  faxPageCount?: number;

  /**
   * Fax only. Resolution of a fax message. 'High' for black and
   *  white image scanned at 200 dpi, 'Low' for black and white image scanned
   *  at 100 dpi
   */
  faxResolution?: "High" | "Low";

  /** */
  from?: MessageStoreCallerInfoResponseFrom;

  /**
   * The date/time when the message was modified on server in ISO
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
   * Pager only. `true` if at least one of the message recipients is
   *  'Department' extension
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
   * SMS only. Date/time when outbound SMS was delivered to recipient's
   *  handset in ISO 8601 format including timezone, for example
   *  2016-03-10T18:07:52.534Z. It is filled only if a carrier sends a delivery
   *  receipt to RingCentral
   * Format: date-time
   */
  smsDeliveryTime?: string;

  /**
   * SMS only. Number of attempts made to send an outbound SMS to
   *  the Gateway (if Gateway is temporary unavailable)
   * Format: int32
   */
  smsSendingAttemptsCount?: number;

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

  /**
   * Voicemail only. Status of a voicemail to text transcription.
   *  If 'VoicemailToText' feature is not activated for account,
   *  the 'NotAvailable' value is returned
   */
  vmTranscriptionStatus?:
    | "NotAvailable"
    | "InProgress"
    | "TimedOut"
    | "Completed"
    | "CompletedPartially"
    | "Failed"
    | "Unknown";

  /**
   * Cover page identifier. If coverIndex is set to '0' (zero) cover
   *  page is not attached. For the list of available cover page identifiers
   *  (1-13) please call the Fax Cover Pages method. If not specified,
   *  the default cover page is attached (which is configured in 'Outbound
   *  Fax Settings')
   * Format: int32
   */
  coverIndex?: number;

  /**
   * Cover page text, entered by the fax sender and printed on the
   *  cover page. Maximum length is limited to 1024 symbols
   */
  coverPageText?: string;

  /** */
  owner?: VoicemailOwnerResource;
}

export default GetMessageInfoResponse;
