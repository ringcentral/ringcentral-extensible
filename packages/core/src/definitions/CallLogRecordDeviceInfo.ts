interface CallLogRecordDeviceInfo {
  /**
   * Internal identifier of a device
   * Required
   */
  id?: string;

  /**
   * Canonical URI of a device resource
   * Required
   * Format: uri
   */
  uri?: string;
}

export default CallLogRecordDeviceInfo;
