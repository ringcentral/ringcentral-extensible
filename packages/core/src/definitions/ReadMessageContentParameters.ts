/**
 * Query parameters for operation readMessageContent
*/
interface ReadMessageContentParameters {
  /**
   * Whether the content is expected to be displayed in the browser, or downloaded and saved locally
   */
  contentDisposition?: ('Inline' | 'Attachment');

  /**
   * The default filename of the file to be downloaded
   */
  contentDispositionFilename?: string;
}

export default ReadMessageContentParameters;
