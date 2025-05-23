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
   * Example: Thu Mar 10 2016 10:07:52 GMT-0800 (Pacific Standard Time)
   */
  time?: string;
}

export default TMAttachmentFootnoteInfo;
