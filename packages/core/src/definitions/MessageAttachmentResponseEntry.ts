interface MessageAttachmentResponseEntry {
  /**
   * Unique identifier of an attachment
   * Required
   */
  id?: string;

  /**
   * MIME content type of an attachment
   * Required
   * Example: audio/mpeg
   */
  contentType?: string;

  /**
   * Suggested filename of an attachment.
   * Example: my-song.mp3
   */
  filename?: string;

  /**
   * Link to the attachment binary content
   * Required
   * Format: uri
   */
  contentUri?: string;

  /**
   * Size of the file in bytes
   * Required
   * Format: int64
   */
  size?: number;
}

export default MessageAttachmentResponseEntry;
