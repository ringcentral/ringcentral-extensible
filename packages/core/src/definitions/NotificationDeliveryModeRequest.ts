/**
 * Notification delivery transport information
*/
interface NotificationDeliveryModeRequest {
  /**
   * Notifications transport type
   * Required
   */
  transportType?: ('WebHook' | 'RC/APNS' | 'RC/GCM' | 'PubNub');

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
}

export default NotificationDeliveryModeRequest;
