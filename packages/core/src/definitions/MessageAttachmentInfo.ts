interface MessageAttachmentInfo {
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
   * Type of message attachment
   */
  type?: ('AudioRecording' | 'AudioTranscription' | 'Text' | 'SourceDocument' | 'RenderedDocument' | 'MmsAttachment');

  /**
   * MIME type for a given attachment, for instance 'audio/wav'
   */
  contentType?: string;

  /**
   * Supported for `Voicemail` only. Duration of a voicemail in
 *  seconds
   * Format: int32
   */
  vmDuration?: number;

  /**
   * Name of a file attached
   */
  fileName?: string;

  /**
   * Size of attachment in bytes
   * Format: int32
   */
  size?: number;

  /**
   * Attachment height in pixels if available
   * Format: int32
   */
  height?: number;

  /**
   * Attachment width in pixels if available
   * Format: int32
   */
  width?: number;
}

export default MessageAttachmentInfo;
