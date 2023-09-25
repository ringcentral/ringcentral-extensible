interface WebhookDeliveryMode {
  /**
   * The transport type for this subscription, or the channel by which an app should be notified of an event
   * Required
   */
  transportType?: 'WebHook';

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

export default WebhookDeliveryMode;
