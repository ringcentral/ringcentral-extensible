class NotificationDeliveryModeRequest
{
    /// <summary>
    /// Notifications transportation provider name
    /// Enum: PubNub, WebHook, RC/APNS, RC/GCM
    /// </summary>
    transportType: string

    /// <summary>
    /// Mandatory for 'WebHook' transport type, URL of a consumer service (cannot be changed during subscription update)
    /// </summary>
    address: string

    /// <summary>
    /// Optional parameter. Specifies if the message will be encrypted or not. If request contains any presence event filter the value by default is 'True' (even if specified as 'false'). If request contains only message event filters the value by default is 'False'
    /// </summary>
    encryption: boolean

    /// <summary>
    /// Name of a certificate. Supported for 'RC/APNS' and 'RC/GCM' transport types
    /// </summary>
    certificateName: string

    /// <summary>
    /// Identifier of a registration. Supported for 'RC/APNS' and 'RC/GCM' transport types
    /// </summary>
    registrationId: string

    /// <summary>
    /// Verification key of a subscription ensuring data security. Supported for 'Webhook' transport type
    /// </summary>
    verificationToken: string
}

export default NotificationDeliveryModeRequest