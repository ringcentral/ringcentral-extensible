/**
 * Notification delivery transport information
 */
interface NotificationDeliveryModeRequest {
  /**
   * The transport type for this subscription
   * Required
   */
  transportType?: "WebHook" | "RC/APNS" | "RC/GCM" | "PubNub" | "Internal";

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

  /**
   * Certificate name for mobile notification transports
   * Required
   */
  certificateName?: string;

  /**
   * Device instance ID for mobile notification transports
   * Required
   * Example: 38b062ae-85f8-4dcc-8734-04d3f7393d42
   */
  registrationId?: string;

  /**
   * Optional. Specifies if notification messages will be encrypted
   *  or not. Please note that for some event filters (e.g. presence) encryption is mandatory and
   *  `false` value provided by caller will be ignored.
   */
  encryption?: boolean;

  /**
   * (Only for an `Internal` transport)
   *  The name of internal channel (defined in the backend service configuration) to deliver notifications through.
   * Required
   * Example: my-server-channel
   */
  configName?: string;
}

export default NotificationDeliveryModeRequest;
