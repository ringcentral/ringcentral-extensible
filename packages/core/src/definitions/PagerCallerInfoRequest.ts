/**
 * Sender of a pager message.
*/
interface PagerCallerInfoRequest {
  /**
   * Extension identifier
   * Example: 123456789
   */
  extensionId?: string;

  /**
   * Extension number
   * Example: 105
   */
  extensionNumber?: string;
}

export default PagerCallerInfoRequest;
