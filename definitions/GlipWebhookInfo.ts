class GlipWebhookInfo
{
    /// <summary>
    /// Internal identifier of a webhook
    /// </summary>
    id: string

    /// <summary>
    /// Internal identifier of the user who created a webhook
    /// </summary>
    creatorId: string

    /// <summary>
    /// Internal identifiers of groups where a webhook has been created
    /// </summary>
    groupIds: string[]

    /// <summary>
    /// Webhook creation time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
    /// </summary>
    creationTime: string

    /// <summary>
    /// Webhook last update time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// Public link to send a webhook payload
    /// </summary>
    uri: string

    /// <summary>
    /// Current status of a webhook
    /// Enum: Active, Suspended, Deleted
    /// </summary>
    status: string
}

export default GlipWebhookInfo