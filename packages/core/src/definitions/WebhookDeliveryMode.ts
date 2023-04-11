interface WebhookDeliveryMode {
  /**
   * Notifications transport type
   * Required
   */
  transportType?: ('WebHook');

  /**
   * (Only for a "WebHook" transport, required) URL of a subscriber's web service
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
