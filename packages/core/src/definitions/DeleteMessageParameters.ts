/**
 * Query parameters for operation deleteMessage
 */
interface DeleteMessageParameters {
  /**
   * If the value is `true`, then the message is purged immediately
   *  with all the attachments
   */
  purge?: boolean;

  /**
   * Type of messages to be deleted
   * Default: All
   */
  type?: "Fax" | "SMS" | "VoiceMail" | "Pager" | "Text" | "All";
}

export default DeleteMessageParameters;
