// for browser
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let Blob: any;

class Attachment {
  /**
   * File name with extension, such as 'example.png'
   */
  filename?: string;

  /**
   * Binary content of the file
   */
  content?: string | Buffer | typeof Blob | NodeJS.ReadableStream;

  /**
   * Content tyle of the file, such as 'image/png'
   */
  contentType?: string;
}

export default Attachment;
