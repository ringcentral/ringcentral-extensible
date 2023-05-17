interface AddPhoneNumbersTask {
  /**
   * Internal identifier of a task
   */
  id?: string;

  /**
   * Task creation time in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Task status
   * Example: Accepted
   */
  status?: string;
}

export default AddPhoneNumbersTask;
