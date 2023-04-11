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
  content?: string | Buffer | Blob | NodeJS.ReadableStream;

  /**
   * Content type of the file, such as "image/png"
   */
  contentType?: string;
}

export default Attachment;
