interface SocMsgContentAttachment {
  /**
   * Type of attachment, which is generally a MIME attachment type like `image/jpeg`, etc.
   *  Security level in RingCX determines what type of attachment is allowed.
   *  Based on the security level the following attachment types are supported.
   *
   *  *'Strict'* level allows safe extensions below:
   *  Content name and supported types:
   *
   *  - audio (AAC, MP3, OGG, M4A)
   *  - image (BMP, GIF, JPG, JPEG, PNG, SVG, WEBP)
   *  - pdf (PDF)
   *  - text (CSV, TXT, LOG)
   *  - video (AVI, FLV, M4V, MKV, MOV, MP4, MPG, QT, WMV)
   *  - other (AMR, DMS, VCARD, TIF, TIFF, MPEG)
   *
   *  *'Relaxed'* level allows documents:
   *  Content name and supported types:
   *
   *  - excel (XLS, XLSM, XLSX, XLC, XLT, XLTM, XLTX)
   *  - presentation (KEY, ODP, OTP)
   *  - powerpoint (PPS, PPT, PPTX, POT)
   *  - spreadsheet (Numbers - ODS, OTS)
   *  - word (DOC, DOCM, DOCX, DOTM, DOTX)
   *  - word_processing (Pages - ODT, OTT, RTF)
   *
   *  *'Permissive'* level allows all documents.
   *
   *  However, there are no security level restrictions for content posted through the channel
   * Example: image/jpeg
   */
  contentType?: string;

  /**
   * Creation time of the resource.
   * Format: date-time
   * Example: 2023-02-04T12:43:07Z
   */
  creationTime?: string;

  /**
   * Specifies if attachment is embedded in content
   */
  embedded?: boolean;

  /**
   * Filename of attachment
   * Example: 0.jpeg
   */
  filename?: string;

  /**
   * Identifier of the attachment.
   * Example: 54085e5b7aa58d8b5d00006c
   */
  id?: string;

  /**
   * Attachment privacy setting
   * Default: true
   */
  public?: boolean;

  /**
   * Size of attachment
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
   * Attachment URI
   * Format: uri
   * Example: https://example.digital.ringcentral.com/files/attachments/54085e5b7aa58d8b5d00006c
   */
  uri?: string;
}

export default SocMsgContentAttachment;
