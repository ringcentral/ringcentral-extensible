/**
 * Identifier of a call party the call will be transferred to. Only **one of** these parameters: `phoneNumber`, `voicemail`, `extensionNumber` or `parkOrbit` must be specified, otherwise an error is returned.
 */
interface TransferTarget {
  /**
   * Phone number
   */
  phoneNumber?: string;

  /**
   * Voicemail owner extension identifier
   */
  voicemail?: string;

  /**
   * Park orbit identifier
   */
  parkOrbit?: string;

  /**
   * Extension short number
   */
  extensionNumber?: string;
}

export default TransferTarget;
