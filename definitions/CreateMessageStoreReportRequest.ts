class CreateMessageStoreReportRequest
{
    /**
     * Starting time for collecting messages. The default value equals to the current time minus 24 hours
     */
    dateFrom: string

    /**
     * Ending time for collecting messages. The default value is the current time
     */
    dateTo: string
}

export default CreateMessageStoreReportRequest