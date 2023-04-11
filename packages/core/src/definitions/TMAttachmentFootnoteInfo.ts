interface TMAttachmentFootnoteInfo {
  /**
   * Text of a footer
   */
  text?: string;

  /**
   * Link to an icon displayed to the left of a footer; sized 32x32px
   * Format: uri
   */
  iconUri?: string;

  /**
   * Message creation datetime in ISO 8601 format including timezone
   * Format: date-time
   * Example: 2016-03-10T18:07:52.534Z
   */
  time?: string;
}

export default TMAttachmentFootnoteInfo;
