/**
 * Device information
*/
interface DeviceInfoRequest {
  /**
   * Device unique identifier, retrieved at previous session (if any)
   */
  id?: string;

  /**
   * Supported for iOS devices only. Certificate name (used by iOS
 *  applications for APNS subscription)
   */
  appExternalId?: string;

  /**
   * Computer name (for SoftPhone only).
   */
  computerName?: string;

  /**
   * Endpoint/device instance identifier for Softphone and mobile applications.
   */
  serial?: string;
}

export default DeviceInfoRequest;
