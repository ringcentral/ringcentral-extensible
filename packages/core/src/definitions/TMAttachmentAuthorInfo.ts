interface TMAttachmentAuthorInfo {
  /**
   * Name of a message author
   */
  name?: string;

  /**
   * Link to an author's name
   * Format: uri
   */
  uri?: string;

  /**
   * Link to an image displayed to the left of an author's name; sized 82x82px
   * Format: uri
   */
  iconUri?: string;
}

export default TMAttachmentAuthorInfo;
