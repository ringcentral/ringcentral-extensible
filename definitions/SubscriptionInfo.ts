import DisabledFilterInfo from './DisabledFilterInfo'
import NotificationDeliveryMode from './NotificationDeliveryMode'
import NotificationBlacklistedData from './NotificationBlacklistedData'

class SubscriptionInfo
{
    /// <summary>
    /// Internal identifier of a subscription
    /// </summary>
    id: string

    /// <summary>
    /// Canonical URI of a subscription
    /// </summary>
    uri: string

    /// <summary>
    /// Collection of API resources (message-store/presence/detailed presence) corresponding to events the user is subscribed to
    /// </summary>
    eventFilters: string[]

    /// <summary>
    /// Collection of API resources (message-store/presence/detailed presence) corresponding to events the user is not subscribed to due to certain limitations
    /// </summary>
    disabledFilters: DisabledFilterInfo[]

    /// <summary>
    /// Subscription expiration datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    expirationTime: string

    /// <summary>
    /// Subscription lifetime in seconds
    /// Default: 900
    /// </summary>
    expiresIn: number

    /// <summary>
    /// Subscription status
    /// Enum: Active, Suspended, Blacklisted
    /// </summary>
    status: string

    /// <summary>
    /// Subscription creation datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    creationTime: string

    /// <summary>
    /// Delivery mode data
    /// Required
    /// </summary>
    deliveryMode: NotificationDeliveryMode

    /// <summary>
    /// </summary>
    blacklistedData: NotificationBlacklistedData

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

export default SubscriptionInfo