interface ContentAttachment {
  /**
   * Type of the attachment, which is generally a MIME attachment type like "image/jpeg", etc.
   *
   *  Security level in ED determines what type of attachment is allowed.
   *
   *  Based on the security level the following attachment types are supported.
   *
   *  "Strict" level allows safe extensions below:
   *  Content name and supported types
   *  * audio (supports aac mp3 ogg m4a)
   *  * image (supports bmp gif jpg jpeg png svg webp)
   *  * pdf (supports pdf)
   *  * text (supports csv txt log)
   *  * video (supports avi flv m4v mkv mov mp4 mpg qt wmv)
   *  * other (supports amr dms vcard tif tiff mpeg)
   *
   *  "Relaxed" level allows documents:
   *  Content name and supported types
   *  * excel (supports xls xlsm xlsx xlc xlt xltm xltx)
   *  * presentation (supports key odp otp)
   *  * powerpoint (supports pps ppt pptx pot)
   *  * spreadsheet (supports numbers ods ots)
   *  * word (supports doc docm docx dotm dotx)
   *  * word_processing (supports pages odt ott rtf)
   *
   *  "Permissive" level allows all documents.
   *
   *  However, there are no security level restrictions for content posted through the channel.
   * Example: image/jpeg
   */
  contentType?: string;

  /**
   * Creation time of the attachment.
   * Format: date-time
   * Example: 2023-02-04T12:43:07Z
   */
  creationTime?: string;

  /**
   * Embedded in a content.
   */
  embedded?: boolean;

  /**
   * Filename of the attachment.
   * Example: 0.jpeg
   */
  filename?: string;

  /**
   * Identifier of the attachment.
   * Example: 54085e5b7aa58d8b5d00006c
   */
  id?: string;

  /**
   * Privacy setting of the attachment.
   */
  public?: boolean;

  /**
   * Size of the attachment.
   * Format: int32
   * Example: 217571
   */
  size?: number;

  /**
   * The time when the last modification was completed.
   * Format: date-time
   * Example: 2023-02-04T12:43:07Z
   */
  lastModifiedTime?: string;

  /**
   * Uri of the attachment.
   * Format: uri
   * Example: https://example.digital.ringcentral.com/files/attachments/54085e5b7aa58d8b5d00006c
   */
  uri?: string;
}

export default ContentAttachment;
