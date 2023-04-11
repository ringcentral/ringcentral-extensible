interface MessageAttachmentInfoIntId {
  /**
   * Internal identifier of a message attachment
   * Format: int64
   */
  id?: number;

  /**
   * Canonical URI of a message attachment
   * Format: uri
   */
  uri?: string;

  /**
   * Type of a message attachment
   */
  type?: ('AudioRecording' | 'AudioTranscription' | 'Text' | 'SourceDocument' | 'RenderedDocument' | 'MmsAttachment');

  /**
   * MIME type for a given attachment, for instance 'audio/wav'
   */
  contentType?: string;

  /**
   * Name of a file attached
   */
  filename?: string;

  /**
   * Size of an attachment in bytes
   * Format: int32
   */
  size?: number;
}

export default MessageAttachmentInfoIntId;
