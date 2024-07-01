/**
 * Token endpoint request parameters used in the "Device Authorization" flow
 * with the `urn:ietf:params:oauth:grant-type:device_code` grant type
 *
 */
interface DeviceCodeTokenRequest {
  /**
   * Grant type
   */
  grant_type?: 'urn:ietf:params:oauth:grant-type:device_code';

  /**
   * For `urn:ietf:params:oauth:grant-type:device_code` grant type only.
   *  The device verification code as defined by [RFC-8628](https://datatracker.ietf.org/doc/html/rfc8628#section-3.4)
   * Required
   */
  device_code?: string;
}

export default DeviceCodeTokenRequest;
