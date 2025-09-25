/**
 * Token endpoint request parameters used in the "IVR Pin" authorization flow with the `ivr_pin` grant type
 */
interface IvrPinTokenRequest {
  /**
   * Grant type
   * Required
   */
  grant_type?: "ivr_pin";

  /**
   * For `ivr_pin` grant type only. User's IVR pin.
   * Required
   */
  ivr_pin?: string;
}

export default IvrPinTokenRequest;
