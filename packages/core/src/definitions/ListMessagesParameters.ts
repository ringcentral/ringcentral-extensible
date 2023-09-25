/**
 * Query parameters for operation listMessages
 */
interface ListMessagesParameters {
  /**
   * Specifies the availability status for resulting messages.
   *  Multiple values are accepted
   */
  availability?: ('Alive' | 'Deleted' | 'Purged')[];

  /**
   * Specifies a conversation identifier for the resulting messages
   */
  conversationId?: string;

  /**
   * Start datetime for resulting messages in ISO 8601 format
   *  including timezone, for example 2016-03-10T18:07:52.534Z. The default value
   *  is dateTo minus 24 hours
   * Format: date-time
   */
  dateFrom?: string;

  /**
   * End datetime for resulting messages in ISO 8601 format including
   *  timezone, for example 2016-03-10T18:07:52.534Z. The default value is current
   *  time
   * Format: date-time
   */
  dateTo?: string;

  /**
   * Direction for resulting messages. If not specified, both
   *  inbound and outbound messages are returned. Multiple values are accepted
   */
  direction?: ('Inbound' | 'Outbound')[];

  /**
   * If 'True', then the latest messages per every conversation ID
   *  are returned
   */
  distinctConversations?: boolean;

  /**
   * Type of resulting messages. If not specified, all messages
   *  without message type filtering are returned. Multiple values are accepted
   */
  messageType?: ('Fax' | 'SMS' | 'VoiceMail' | 'Pager')[];

  /**
   * Read status for resulting messages. Multiple values are
   *  accepted
   */
  readStatus?: ('Read' | 'Unread')[];

  /**
   * Indicates a page number to retrieve. Only positive number values
   *  are accepted
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Indicates a page size (number of items)
   * Format: int32
   * Default: 100
   */
  perPage?: number;

  /**
   * Phone number. If specified, messages are returned for this
   *  particular phone number only
   */
  phoneNumber?: string;
}

export default ListMessagesParameters;
