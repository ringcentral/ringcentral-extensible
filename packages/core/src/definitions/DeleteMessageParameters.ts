/**
 * Query parameters for operation deleteMessage
 */
interface DeleteMessageParameters {
  /**
   * If the value is `true`, then the message is purged immediately
   *  with all the attachments
   */
  purge?: boolean;
}

export default DeleteMessageParameters;
