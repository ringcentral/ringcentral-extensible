/**
 * Identifier of a call party the call will be transferred to. Only **one of** these parameters: `phoneNumber`, `voicemail`, `extensionNumber`, `parkOrbit` or `extensionId` must be specified, otherwise an error is returned.
 */
interface TransferTarget {
  /**
   * Phone number
   * Required
   */
  phoneNumber?: string;

  /**
   * Voicemail owner extension identifier
   * Required
   */
  voicemail?: string;

  /**
   * Extension short number
   * Required
   */
  extensionNumber?: string;

  /**
   * Park orbit identifier
   * Required
   */
  parkOrbit?: string;

  /**
   * Extension mailbox identifier
   * Required
   */
  extensionId?: string;
}

export default TransferTarget;
