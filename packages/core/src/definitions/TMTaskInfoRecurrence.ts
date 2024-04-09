interface TMTaskInfoRecurrence {
  /**
   * Task recurrence settings. None for non-periodic tasks
   */
  schedule?: 'None' | 'Daily' | 'Weekdays' | 'Weekly' | 'Monthly' | 'Yearly';

  /**
   * Task ending condition
   */
  endingCondition?: 'None' | 'Count' | 'Date';

  /**
   * Count of iterations of periodic tasks
   * Maximum: 10
   * Minimum: 1
   * Format: int32
   */
  endingAfter?: number;

  /**
   * End date of a periodic task in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
   * Format: date-time
   */
  endingOn?: string;
}

export default TMTaskInfoRecurrence;
