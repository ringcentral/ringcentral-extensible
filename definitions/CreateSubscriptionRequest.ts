import NotificationDeliveryModeRequest from './NotificationDeliveryModeRequest'

class CreateSubscriptionRequest
{
    /// <summary>
    /// Collection of URIs to API resources
    /// Required
    /// </summary>
    eventFilters: string[]

    /// <summary>
    /// Notification delivery settings
    /// Required
    /// </summary>
    deliveryMode: NotificationDeliveryModeRequest

    /// <summary>
    /// Subscription lifetime in seconds. Max value is 7 days (604800 sec). For *WebHook* transport type max value might be set up to 630720000 seconds (20 years)
    /// Default: 604800
    /// </summary>
    expiresIn: number
}

export default CreateSubscriptionRequest