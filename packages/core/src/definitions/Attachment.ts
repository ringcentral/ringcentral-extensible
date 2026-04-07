/**
 * Attachment is a file to be uploaded
 */
interface Attachment {
  /**
   * Filename with extension, such as "image.png"
   */
  filename?: string;

  /**
   * Binary content of the file
   * Required
   */
  content?: string | Uint8Array | Blob | AsyncIterable<Uint8Array>;

  /**
   * Content type of the file, such as "image/png"
   */
  contentType?: string;
}

export default Attachment;
