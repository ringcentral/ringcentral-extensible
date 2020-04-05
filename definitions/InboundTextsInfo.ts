class InboundTextsInfo
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
    /// List of recipient email addresses for inbound text message notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only
    /// </summary>
    advancedEmailAddresses: string[]

    /// <summary>
    /// List of recipient phone numbers for inbound text message notifications. Returned if specified, in both modes (advanced/basic). Applied in advanced mode only
    /// </summary>
    advancedSmsEmailAddresses: string[]
}

export default InboundTextsInfo