interface TMUpdateTaskRequestRecurrence {
  /**
   * Task recurrence settings.
   * Default: None
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
   * End date of a periodic task in UTC time zone
   * Format: date-time
   */
  endingOn?: string;
}

export default TMUpdateTaskRequestRecurrence;
