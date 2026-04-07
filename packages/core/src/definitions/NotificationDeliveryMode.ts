/**
 * Notification delivery transport information
 */
interface NotificationDeliveryMode {
  /**
   * The transport type for this subscription
   * Required
   */
  transportType?: "WebHook" | "WebSocket";

  /**
   * The URL to which notifications should be delivered. This is only applicable for the `WebHook` transport type, for which it is a required field.
   * Required
   * Format: uri
   * Example: https://acme.com/myservice/webhook
   */
  address?: string;

  /**
   * Specifies if notification messages will be encrypted or not.
   * Required
   */
  encryption?: boolean;
}

export default NotificationDeliveryMode;
