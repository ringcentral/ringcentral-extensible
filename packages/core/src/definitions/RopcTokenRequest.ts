/**
 * Token endpoint request parameters used in the "Password" (also known as "Resource Owner Password Credentials" - ROPC)
 * authorization flow with the `password` grant type
 */
interface RopcTokenRequest {
  /**
   * Grant type
   * Required
   */
  grant_type?: "password";

  /**
   * For `password` grant type only. User login name: email or phone number in E.164 format
   * Required
   */
  username?: string;

  /**
   * For `password` grant type only. User's password
   * Required
   * Format: password
   */
  password?: string;

  /**
   * For `password` grant type only. Optional. Extension short number. If a company number
   *  is specified as a username, and extension is not specified, the
   *  server will attempt to authenticate client as main company administrator
   *
   *  DEPRECATED: use extension number embedded into username string like `+16501234567*101`
   */
  extension?: string;

  /**
   * IVR pin for pin-based authentication.
   *
   *  DEPRECATED: use a dedicated `ivr_pin` grant type instead
   */
  pin?: string;
}

export default RopcTokenRequest;
