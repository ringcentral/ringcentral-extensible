interface CallerIdDeviceInfo {
  /**
   * Internal identifier of a device
   */
  id?: string;

  /**
   * Link to a device resource
   * Format: uri
   */
  uri?: string;

  /**
   * Name of a device
   */
  name?: string;
}

export default CallerIdDeviceInfo;
