interface CreateMessageStoreReportRequest {
  /**
   * The end of the time range to collect message records in ISO 8601 format including timezone.
 *  Default is the current time
   * Format: date-time
   */
  dateTo?: string;

  /**
   * The beginning of the time range to collect call log records in ISO 8601 format including timezone.
 *  Default is the current time minus 24 hours
   * Format: date-time
   */
  dateFrom?: string;

  /**
   * Types of messages to be collected. If not specified, all messages without message type filtering will be returned. Multiple values are accepted
   * Example: Fax,VoiceMail
   */
  messageTypes?: ('EMail' | 'Fax' | 'SMS' | 'VoiceMail' | 'Pager' | 'Text')[];
}

export default CreateMessageStoreReportRequest;
