class CreateMessageStoreReportRequest
{
    /// <summary>
    /// Starting time for collecting messages. The default value equals to the current time minus 24 hours
    /// </summary>
    dateFrom: string

    /// <summary>
    /// Ending time for collecting messages. The default value is the current time
    /// </summary>
    dateTo: string
}

export default CreateMessageStoreReportRequest