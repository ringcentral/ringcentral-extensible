interface InternalDeliveryMode {
  /**
   * The transport type for this subscription, or the channel by which an app should be notified of an event
   * Required
   */
  transportType?: "Internal";

  /**
   * The name of internal channel (defined in the backend service configuration) to deliver notifications through.
   * Required
   * Example: my-server-channel
   */
  configName?: string;
}

export default InternalDeliveryMode;
