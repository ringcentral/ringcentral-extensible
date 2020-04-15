class Attachment
{
  /**
   * File name with extension, such as "example.png"
   */
  filename: string

  /**
   * Binary content of the file
   */
  content: string | Buffer | Blob | ReadableStream

  /**
   * Content tyle of the file, such as "image/png"
   */
  contentType: string
}

export default Attachment
