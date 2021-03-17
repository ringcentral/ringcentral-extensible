// Information about the message that failed to be sent
class RejectedMessageInfo {
  /**
   * Index of the rejected message in the request
   */
  index?: number;

  /**
   */
  to?: string[];

  /**
   * Standard error code
   */
  errorCode?: string;

  /**
   * Standard error description
   */
  description?: string;
}

export default RejectedMessageInfo;
