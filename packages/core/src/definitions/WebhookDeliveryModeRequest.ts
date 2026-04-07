interface WebhookDeliveryModeRequest {
  /**
   * The transport type for this subscription, or the channel by which an app should be notified of an event
   * Required
   */
  transportType?: "WebHook";

  /**
   * The URL to which notifications should be delivered. This is only applicable for the `WebHook` transport type, for which it is a required field.
   * Required
   * Format: uri
   * Example: https://acme.com/myservice/webhook
   */
  address?: string;

  /**
   * An optional validation token used to verify the authenticity of the incoming webhook. Applicable only for the `WebHook` transport type.
   */
  verificationToken?: string;
}

export default WebhookDeliveryModeRequest;
