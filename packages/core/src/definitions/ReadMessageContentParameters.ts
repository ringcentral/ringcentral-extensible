/**
 * Query parameters for operation readMessageContent
*/
interface ReadMessageContentParameters {
  /**
   * Content disposition of a response
   * Default: Inline
   */
  contentDisposition?: ('Inline' | 'Attachment');
}

export default ReadMessageContentParameters;
