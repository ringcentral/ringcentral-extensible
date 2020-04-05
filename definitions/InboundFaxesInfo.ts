class InboundFaxesInfo
{
    /// <summary>
    /// Email notification flag
    /// </summary>
    notifyByEmail: boolean

    /// <summary>
    /// SMS notification flag
    /// </summary>
    notifyBySms: boolean

    /// <summary>
    /// List of recipient email addresses for inbound fax notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only
    /// </summary>
    advancedEmailAddresses: string[]

    /// <summary>
    /// List of recipient phone numbers for inbound fax notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only
    /// </summary>
    advancedSmsEmailAddresses: string[]

    /// <summary>
    /// Indicates whether fax should be attached to email
    /// </summary>
    includeAttachment: boolean

    /// <summary>
    /// Indicates whether email should be automatically marked as read
    /// </summary>
    markAsRead: boolean
}

export default InboundFaxesInfo