interface WebhookDeliveryModeRequest {
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
   * (Only for a "WebHook" transport, optional) Subscription verification token
   */
  verificationToken?: string;
}

export default WebhookDeliveryModeRequest;
