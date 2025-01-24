/**
 * Either `readStatus` or `availability` or both are required
 */
interface PatchMessageRequest {
  /**
   * Message read status
   */
  readStatus?: "Read" | "Unread";

  /**
   * Message availability status. Message in 'Deleted' state is still
   *  preserved with all its attachments and can be restored. 'Purged' means
   *  that all attachments are already deleted and the message itself is about
   *  to be physically deleted shortly
   */
  availability?: "Alive" | "Deleted" | "Purged";
}

export default PatchMessageRequest;
