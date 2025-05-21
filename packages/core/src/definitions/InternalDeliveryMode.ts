interface InternalDeliveryMode {
  /**
   * The transport type for this subscription
   * Required
   */
  transportType?: "Internal";

  /**
   * (Only for an `Internal` transport)
   *  The name of internal channel (defined in the backend service configuration) to deliver notifications through.
   * Required
   * Example: my-server-channel
   */
  configName?: string;
}

export default InternalDeliveryMode;
