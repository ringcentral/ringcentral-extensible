import NotificationDeliveryModeRequest from './NotificationDeliveryModeRequest'

class CreateSubscriptionRequest
{
    /**
     * Collection of URIs to API resources
     * Required
     */
    eventFilters: string[]

    /**
     * Notification delivery settings
     * Required
     */
    deliveryMode: NotificationDeliveryModeRequest

    /**
     * Subscription lifetime in seconds. Max value is 7 days (604800 sec). For *WebHook* transport type max value might be set up to 630720000 seconds (20 years)
     * Default: 604800
     */
    expiresIn: number
}

export default CreateSubscriptionRequest