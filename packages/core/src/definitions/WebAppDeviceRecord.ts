interface WebAppDeviceRecord {
  /**
   * Internal identifier of a device
   * Required
   */
  id?: string;

  /**
   * Device type. Always `WebPhone` for Web Phone (RC App) devices
   * Required
   */
  type?: "WebPhone";

  /**
   * Device name
   */
  name?: string;

  /**
   * Endpoint ID of the Web Phone (RC App) instance
   */
  serial?: string;

  /**
   * Current registration status of the device. Set to `Online` when the device
   *  has an active registration; otherwise `Offline`.
   * Required
   * Default: Offline
   */
  status?: "Offline" | "Online";

  /**
   * Time to live (TTL) of the current registration, in seconds.
   *  Returned only while the device has an active registration.
   * Format: int32
   */
  expiresIn?: number;
}

export default WebAppDeviceRecord;
