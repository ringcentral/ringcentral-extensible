/**
 * Query parameters for operation getBridgeByPstnPin
 */
interface GetBridgeByPstnPinParameters {
  /**
   * Bridge hash password
   */
  pw?: string;

  /**
   * Phone number to find a phone group for PSTN PIN. If it is not specified, then the default phone group will be used.
   */
  phoneNumber?: string;
}

export default GetBridgeByPstnPinParameters;
