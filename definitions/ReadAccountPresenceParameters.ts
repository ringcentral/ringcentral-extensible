class ReadAccountPresenceParameters
{
    /// <summary>
    /// Whether to return detailed telephony state
    /// </summary>
    detailedTelephonyState: boolean

    /// <summary>
    /// Whether to return SIP data
    /// </summary>
    sipData: boolean

    /// <summary>
    /// Page number for account presence information
    /// </summary>
    page: number

    /// <summary>
    /// Number for account presence information items per page
    /// </summary>
    perPage: number
}

export default ReadAccountPresenceParameters