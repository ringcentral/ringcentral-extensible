class Attachment
{
  /**
   * File name with extension, such as 'example.png'
   */
  filename?: string

  /**
   * Binary content of the file
   */
  content?: string | Buffer | Blob | NodeJS.ReadableStream

  /**
   * Content tyle of the file, such as 'image/png'
   */
  contentType?: string

  /**
   * Check if an object is considered to be an attachment
   */
  static isAttachment(obj: any): boolean {
    return 'filename' in obj && 'content' in obj
  }
}

export default Attachment
