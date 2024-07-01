/**
 * Task information
 */
interface TaskRecurrenceInfo {
  /**
   * Recurrence settings of a task. None for non-periodic tasks
   * Default: None
   */
  schedule?: 'None' | 'Daily' | 'Weekdays' | 'Weekly' | 'Monthly' | 'Yearly';

  /**
   * Ending condition of a task
   * Default: None
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
   * End date of a periodic task in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   *  format, UTC time zone
   * Format: date-time
   */
  endingOn?: string;
}

export default TaskRecurrenceInfo;
