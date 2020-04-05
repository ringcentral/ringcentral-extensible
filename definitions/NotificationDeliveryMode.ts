class NotificationDeliveryMode
{
    /// <summary>
    /// Optional parameter. Specifies if the message will be encrypted or not
    /// </summary>
    encryption: boolean

    /// <summary>
    /// PubNub channel name
    /// </summary>
    address: string

    /// <summary>
    /// PubNub subscriber credentials required to subscribe to the channel
    /// </summary>
    subscriberKey: string

    /// <summary>
    /// PubNub subscriber credentials required to subscribe to the channel. Optional (for PubNub transport type only)
    /// </summary>
    secretKey: string

    /// <summary>
    /// Encryption algorithm 'AES' (for PubNub transport type only)
    /// </summary>
    encryptionAlgorithm: string

    /// <summary>
    /// Key for notification message decryption (for PubNub transport type only)
    /// </summary>
    encryptionKey: string

    /// <summary>
    /// Notifications transportation provider name
    /// Enum: PubNub, WebHook, RC/APNS, RC/GCM
    /// </summary>
    transportType: string

    /// <summary>
    /// Name of a certificate. Supported for 'RC/APNS' and 'RC/GCM' transport types
    /// </summary>
    certificateName: string

    /// <summary>
    /// Identifier of a registration. Supported for 'RC/APNS' and 'RC/GCM' transport types
    /// </summary>
    registrationId: string
}

export default NotificationDeliveryMode