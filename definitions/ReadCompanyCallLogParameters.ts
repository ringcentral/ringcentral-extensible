class ReadCompanyCallLogParameters
{
    /**
     * Extension number of a user. If specified, returns call log for a particular extension only
     */
    extensionNumber?: string

    /**
     * Phone number of a caller/call recipient. If specified, returns all calls (both incoming and outcoming) with the phone number specified. Cannot be specified together with the extensionNumber filter
     */
    phoneNumber?: string

    /**
     * The direction for the result records. If not specified, both inbound and outbound records are returned. Multiple values are accepted
     */
    direction?: string[]

    /**
     * Call type of a record. If not specified, all call types are returned. Multiple values are accepted
     */
    type?: string[]

    /**
     * View of call records. The same view parameter specified for FSync will be applied for ISync, the view cannot be changed for ISync
     * Default: Simple
     * Enum: Simple, Detailed
     */
    view?: string

    /**
     * **Deprecated**. Supported for compatibility reasons only. `true` if only recorded calls are returned. The default value is `false`. If both `withRecording` and `recordingType` are specified, `withRecording` is ignored
     */
    withRecording?: boolean

    /**
     * Type of a call recording. If not specified, then calls without recordings are also returned
     * Enum: Automatic, OnDemand, All
     */
    recordingType?: string

    /**
     * The start datetime for resulting records in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601]  format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours
     */
    dateFrom?: string

    /**
     * The end datetime for resulting records in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601]  format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
     */
    dateTo?: string

    /**
     * Indicates the page number to retrieve. Only positive number values are accepted
     * Default: 1
     */
    page?: number

    /**
     * Indicates the page size (number of items)
     * Default: 100
     */
    perPage?: number

    /**
     * Internal identifier of a call session
     */
    sessionId?: string
}

export default ReadCompanyCallLogParameters