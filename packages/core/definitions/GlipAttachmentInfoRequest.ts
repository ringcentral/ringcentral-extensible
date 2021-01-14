class GlipAttachmentInfoRequest {
  /**
   * Internal identifier of an attachment
   */
  id?: string;

  /**
   * Type of an attachment
   */
  type?: 'Event' | 'File' | 'Note' | 'Task';
}

export default GlipAttachmentInfoRequest;
