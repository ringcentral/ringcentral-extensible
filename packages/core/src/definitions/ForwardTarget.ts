/**
 * Identifier of a call party the call will be forwarded to. Only **one of** these parameters:
 * `phoneNumber`, `voicemail` or `extensionNumber` must be specified, otherwise an error is returned.
 *
*/
interface ForwardTarget {
  /**
   * Phone number
   */
  phoneNumber?: string;

  /**
   * Voicemail owner extension identifier
   */
  voicemail?: string;

  /**
   * Extension short number
   */
  extensionNumber?: string;
}

export default ForwardTarget;
