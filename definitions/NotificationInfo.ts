import AlertInfo from './AlertInfo'

class NotificationInfo
{
    /// <summary>
    /// Alert information
    /// </summary>
    alert: AlertInfo

    /// <summary>
    /// Number of incoming messages
    /// </summary>
    badge: string

    /// <summary>
    /// Message sound
    /// </summary>
    sound: string

    /// <summary>
    /// Content availability
    /// </summary>
    "content-available": string

    /// <summary>
    /// Category of a message
    /// </summary>
    category: string
}

export default NotificationInfo