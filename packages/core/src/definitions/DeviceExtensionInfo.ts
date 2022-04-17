/**
 * Internal identifier of an extension the device should be assigned to
 */
class DeviceExtensionInfo {
  /**
   * Internal identifier of an extension
   * Format: int64
   */
  id?: number;

  /**
   * Link to an extension resource
   */
  uri?: string;

  /**
   * Number of extension
   */
  extensionNumber?: string;
}
export default DeviceExtensionInfo;
