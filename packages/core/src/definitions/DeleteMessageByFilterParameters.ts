/**
 * Query parameters for operation deleteMessageByFilter
 */
interface DeleteMessageByFilterParameters {
  /** */
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
}

export default DeleteMessageByFilterParameters;
