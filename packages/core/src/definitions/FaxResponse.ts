import MessageStoreCallerInfoResponseFrom from './MessageStoreCallerInfoResponseFrom';
import FaxResponseTo from './FaxResponseTo';
import MessageAttachmentInfoIntId from './MessageAttachmentInfoIntId';

interface FaxResponse {
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
   * Message type - 'Fax'
   */
  type?: ('Fax');

  /**
   */
  from?: MessageStoreCallerInfoResponseFrom;

  /**
   * Recipient information
   */
  to?: FaxResponseTo[];

  /**
   * Message creation datetime in ISO 8601 format including timezone,
 *  for example 2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Message read status
   */
  readStatus?: ('Read' | 'Unread');

  /**
   * Message priority
   */
  priority?: ('Normal' | 'High');

  /**
   * List of message attachments
   */
  attachments?: MessageAttachmentInfoIntId[];

  /**
   * Text message direction. Note that for some message types not all
 *  directions are allowed. For example voicemail messages can
 *  be only inbound
   */
  direction?: ('Inbound' | 'Outbound');

  /**
   * Message availability status. Message in 'Deleted' state is still
 *  preserved with all its attachments and can be restored. 'Purged' means
 *  that all attachments are already deleted and the message itself is about
 *  to be physically deleted shortly
   */
  availability?: ('Alive' | 'Deleted' | 'Purged');

  /**
   * Message status. Different message types may have different
 *  allowed status values. For outbound faxes the aggregated message status
 *  is returned. If, for outbound message, a status for at least one recipient is 'Queued', then
 *  the 'Queued' value is returned. If a status for at least one recipient is
 *  'SendingFailed', then the 'SendingFailed' value is returned. In other cases
 *  the 'Sent' status is returned
   */
  messageStatus?: ('Queued' | 'Sent' | 'Delivered' | 'DeliveryFailed' | 'SendingFailed' | 'Received');

  /**
   * Fax only. Resolution of a fax message. 'High' for black and
 *  white image scanned at 200 dpi, 'Low' for black and white image scanned
 *  at 100 dpi
   */
  faxResolution?: ('High' | 'Low');

  /**
   * Page count in a fax message
   * Format: int32
   */
  faxPageCount?: number;

  /**
   * Datetime when the message was modified on server in ISO 8601
 *  format including timezone, for example 2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Cover page identifier. If `coverIndex` is set to '0' (zero), a cover
 *  page is not attached. For a list of available cover page identifiers
 *  (1-13) please call the Fax Cover Pages method. If not specified,
 *  the default cover page is attached (which is configured in
 *  'Outbound Fax Settings')
   * Format: int32
   */
  coverIndex?: number;

  /**
   * Cover page text, entered by a fax sender and printed on a
 *  cover page. Maximum length is limited to 1024 symbols
   */
  coverPageText?: string;
}

export default FaxResponse;
