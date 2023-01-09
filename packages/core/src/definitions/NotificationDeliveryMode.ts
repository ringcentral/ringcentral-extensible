interface NotificationDeliveryMode {
  /**
   * Notifications transport name, e.g. "WebHook"
   * Required
   */
  transportType?: ('PubNub' | 'RC/APNS' | 'RC/GCM' | 'WebHook' | 'WebSocket');

  /**
   * For a "WebHook" transport - URL of a consumer service (cannot be changed during subscription update)
   * Example: https://acme.com/myservice/webhook
   */
  address?: string;

  /**
   * Optional parameter. Specifies if the message will be encrypted
 *  or not. If request contains any presence event filter the value by default
 *  is 'true' (even if specified as 'false'). If request contains only message
 *  event filters the value by default is 'false'
   */
  encryption?: boolean;

  /**
   * Certificate name (for "RC/APNS" and "RC/GCM" transport types only)
   */
  certificateName?: string;

  /**
   * Registration identifier (for "RC/APNS" and "RC/GCM" transport types only)
   */
  registrationId?: string;

  /**
   * Subscription verification token ensuring data security (For "Webhook" transport type only)
   */
  verificationToken?: string;

  /**
   * PubNub subscriber credentials required to subscribe to the channel (for "PubNub" transport type only)
   */
  subscriberKey?: string;

  /**
   * PubNub subscriber credentials required to subscribe to the channel (for "PubNub" transport type only)
   */
  secretKey?: string;

  /**
   * Encryption algorithm "AES" (for "PubNub" transport type only)
   */
  encryptionAlgorithm?: string;

  /**
   * Key for notification message decryption (for "PubNub" transport type only)
   */
  encryptionKey?: string;
}

export default NotificationDeliveryMode;
