/**
 * Notification delivery transport information
 */
interface NotificationDeliveryMode {
  /**
   * The transport type for this subscription, or the channel by which an app should be notified of an event
   * Required
   */
  transportType?: 'WebHook' | 'RC/APNS' | 'RC/GCM' | 'PubNub' | 'WebSocket' | 'Internal';

  /**
   * PubNub channel name
   * Required
   * Format: uri
   * Example: 54770517599294_6dda849e
   */
  address?: string;

  /**
   * Optional. Specifies if notification messages will be encrypted
   *  or not. Please note that for some event filters (e.g. presence) encryption is mandatory and
   *  `false` value provided by caller will be ignored.
   * Required
   */
  encryption?: boolean;

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
   * PubNub credential required to subscribe to the channel
   * Required
   */
  subscriberKey?: string;

  /**
   * PubNub credential required to subscribe to the channel
   * Required
   */
  secretKey?: string;

  /**
   * (Only for a "PubNub" transport, returned only if `encryption` is `true`)
   *  Encryption algorithm used
   */
  encryptionAlgorithm?: 'AES';

  /**
   * (Only for a "PubNub" transport, returned only if `encryption` is `true`)
   *  Cryptographic key to decrypt PubNub notification messages
   */
  encryptionKey?: string;

  /**
   * The name of internal channel (defined in the backend service configuration) to deliver notifications through.
   * Required
   * Example: my-server-channel
   */
  configName?: string;
}

export default NotificationDeliveryMode;
