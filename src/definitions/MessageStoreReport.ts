class MessageStoreReport {
  /**
   * Internal identifier of a message store report task
   */
  id?: string

  /**
   * Link to a task
   */
  uri?: string

  /**
   * Status of a message store report task
   */
  status?: ('Accepted' | 'Pending' | 'InProgress' | 'AttemptFailed' | 'Failed' | 'Completed' | 'Cancelled')

  /**
   * Internal identifier of an account
   */
  accountId?: string

  /**
   * Internal identifier of an extension
   */
  extensionId?: string

  /**
   * Task creation time
   */
  creationTime?: string

  /**
   * Time of the last task modification
   */
  lastModifiedTime?: string

  /**
   * Ending time for collecting messages
   */
  dateTo?: string

  /**
   * Starting time for collecting messages
   */
  dateFrom?: string
}

export default MessageStoreReport
