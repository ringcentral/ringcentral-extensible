interface TMAttachmentInfo {
  /**
   * Internal identifier of an attachment
   */
  id?: string;

  /**
   * Type of an attachment
   */
  type?: "File" | "Note" | "Event" | "Card";
}

export default TMAttachmentInfo;
