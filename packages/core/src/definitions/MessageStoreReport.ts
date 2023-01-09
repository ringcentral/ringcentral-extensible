interface MessageStoreReport {
  /**
   * Internal identifier of a message store report task
   * Example: 400142200026-400142200026-bd162f24028442489385eb3f44c18354
   */
  id?: string;

  /**
   * Canonical URI of a task
   * Format: uri
   */
  uri?: string;

  /**
   * Status of a message store report task
   */
  status?: ('Accepted' | 'Pending' | 'InProgress' | 'AttemptFailed' | 'Failed' | 'Completed' | 'Cancelled');

  /**
   * Internal identifier of an account
   */
  accountId?: string;

  /**
   * Internal identifier of an extension
   */
  extensionId?: string;

  /**
   * The end of the time range to collect message records in ISO 8601 format including timezone
   * Format: date-time
   */
  dateTo?: string;

  /**
   * The beginning of the time range to collect call log records in ISO 8601 format including timezone
   * Format: date-time
   */
  dateFrom?: string;

  /**
   * The time when this task was started
   * Format: date-time
   */
  startTime?: string;

  /**
   * The time when this task was finished
   * Format: date-time
   */
  finishTime?: string;

  /**
   * Type of messages to be collected.
   * Example: Fax,VoiceMail
   */
  messageTypes?: ('EMail' | 'Fax' | 'SMS' | 'VoiceMail' | 'Pager' | 'Text')[];
}

export default MessageStoreReport;
