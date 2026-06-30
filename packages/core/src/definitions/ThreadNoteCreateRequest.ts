interface ThreadNoteCreateRequest {
  /**
   * Internal identifier of a message thread
   * Required
   */
  threadId?: string;

  /**
   * Message or note text
   * Required
   * Example: Hello, how are you doing today?
   */
  text?: string;
}

export default ThreadNoteCreateRequest;
