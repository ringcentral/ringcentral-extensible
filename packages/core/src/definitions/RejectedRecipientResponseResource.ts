/**
 * The rejected recipient details
*/
interface RejectedRecipientResponseResource {
  /**
   * The index of the messages list in the send batch request where the invalid recipient was found
   * Format: int64
   * Example: 1
   */
  index?: number;

  /**
   * The invalid recipient number as found in the request
   * Example: 29395
   */
  to?: string[];

  /**
   * The error code
   * Example: CMN-100
   */
  errorCode?: string;

  /**
   * The description of the error
   * Example: The recipient is invalid
   */
  description?: string;
}

export default RejectedRecipientResponseResource;
