interface WebSocketDeliveryMode {
  /**
   * The transport type for this subscription, or the channel by which an app should be notified of an event
   * Required
   */
  transportType?: "WebSocket";
}

export default WebSocketDeliveryMode;
