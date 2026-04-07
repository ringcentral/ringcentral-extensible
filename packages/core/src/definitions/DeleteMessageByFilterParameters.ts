/**
 * Query parameters for operation deleteMessageByFilter
 */
interface DeleteMessageByFilterParameters {
  /**
   * Filters shared messages based on the owner extension.
   *  Supported if the 'SharedVoicemail' or 'CallQueueSmsRecipient' feature is enabled
   * Default: Personal
   */
  owner?: string[];

  /**
   * ID(s) of a conversation to delete
   */
  conversationId?: string[];

  /**
   * Messages received earlier then the date specified will be deleted.
   *  The default value is current date/time
   * Format: date-time
   */
  dateTo?: string;

  /**
   * Type of messages to be deleted
   * Default: All
   */
  type?: "Fax" | "SMS" | "VoiceMail" | "Pager" | "Text" | "All";

  /**
   * If the value is `true`, then the messages are purged immediately
   *  with all the attachments
   */
  purge?: boolean;
}

export default DeleteMessageByFilterParameters;
