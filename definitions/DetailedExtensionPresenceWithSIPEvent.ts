import DetailedExtensionPresenceWithSIPEventBody from './DetailedExtensionPresenceWithSIPEventBody'

class DetailedExtensionPresenceWithSIPEvent
{
    /// <summary>
    /// Universally unique identifier of a notification
    /// </summary>
    uuid: string

    /// <summary>
    /// Event filter URI
    /// </summary>
    event: string

    /// <summary>
    /// Datetime of sending a notification in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example *2016-03-10T18:07:52.534Z*
    /// </summary>
    timestamp: string

    /// <summary>
    /// Internal identifier of a subscription
    /// </summary>
    subscriptionId: string

    /// <summary>
    /// Notification payload body
    /// </summary>
    body: DetailedExtensionPresenceWithSIPEventBody
}

export default DetailedExtensionPresenceWithSIPEvent