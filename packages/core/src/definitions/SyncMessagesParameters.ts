/**
 * Query parameters for operation syncMessages
 */
interface SyncMessagesParameters {
  /**
   * Conversation identifier for the resulting messages. Meaningful
   *  for SMS and Pager messages only.
   * Format: int64
   */
  conversationId?: number;

  /**
   * The start date/time for resulting messages in ISO 8601 format
   *  including timezone, for example 2016-03-10T18:07:52.534Z. The default value
   *  is dateTo minus 24 hours
   * Format: date-time
   */
  dateFrom?: string;

  /**
   * The end date/time for resulting messages in ISO 8601 format including
   *  timezone, for example 2016-03-10T18:07:52.534Z. The default value is current
   *  time
   * Format: date-time
   */
  dateTo?: string;

  /**
   * Direction for the resulting messages. If not specified, both
   *  inbound and outbound messages are returned. Multiple values are accepted
   */
  direction?: ('Inbound' | 'Outbound')[];

  /**
   * If `true`, then the latest messages per every conversation ID
   *  are returned
   */
  distinctConversations?: boolean;

  /**
   * Type for the resulting messages. If not specified, all types
   *  of messages are returned. Multiple values are accepted
   */
  messageType?: ('Fax' | 'SMS' | 'VoiceMail' | 'Pager')[];

  /**
   * Limits the number of records to be returned (works in combination
   *  with dateFrom and dateTo if specified)
   * Format: int32
   */
  recordCount?: number;

  /**
   * A `syncToken` value from the previous sync response (for `ISync` mode only, mandatory)
   */
  syncToken?: string;

  /**
   * Type of message synchronization request:
   *    - FSync -- full sync
   *    - ISync -- incremental sync
   */
  syncType?: 'FSync' | 'ISync';

  /**
   * This query parameter will filter voicemail messages based on its owner.
   *  This parameter should be controlled by the 'SharedVoicemail' feature.
   *  If the feature is disabled this filter shouldn't be applied.
   */
  voicemailOwner?: string[];
}

export default SyncMessagesParameters;
