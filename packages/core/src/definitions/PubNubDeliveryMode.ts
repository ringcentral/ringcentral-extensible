interface PubNubDeliveryMode {
  /**
   * The transport type for this subscription
   * Required
   */
  transportType?: "PubNub";

  /**
   * Optional. Specifies if notification messages will be encrypted
   *  or not. Please note that for some event filters (e.g. presence) encryption is mandatory and
   *  `false` value provided by caller will be ignored.
   * Required
   */
  encryption?: boolean;

  /**
   * PubNub channel name
   * Required
   * Example: 54770517599294_6dda849e
   */
  address?: string;

  /**
   * (Only for a `PubNub` transport)
   *  PubNub credential required to subscribe to the channel
   * Required
   */
  subscriberKey?: string;

  /**
   * (Only for a `PubNub` transport)
   *  PubNub credential required to subscribe to the channel
   * Required
   */
  secretKey?: string;

  /**
   * (Only for a `PubNub` transport, returned only if `encryption` is `true`)
   *  Encryption algorithm used
   */
  encryptionAlgorithm?: "AES";

  /**
   * (Only for a `PubNub` transport, returned only if `encryption` is `true`)
   *  Cryptographic key to decrypt PubNub notification messages
   */
  encryptionKey?: string;
}

export default PubNubDeliveryMode;
