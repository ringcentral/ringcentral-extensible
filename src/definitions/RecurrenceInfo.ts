class RecurrenceInfo {
  /**
   * Recurrence time frame
   */
  frequency?: 'Daily' | 'Weekly' | 'Monthly';

  /**
   * Reccurence interval. The supported ranges are: 1-90 for `Daily`; 1-12 for `Weekly`; 1-3 for `Monthly`
   */
  interval?: number;

  /**
   * Supported together with `weeklyByDay`
   */
  monthlyByWeek?: 'Last' | 'First' | 'Second' | 'Third' | 'Fourth';

  /**
   */
  weeklyByDay?:
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday';

  /**
   * Multiple values are supported, should be specified separated by comma
   */
  weeklyByDays?:
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday';

  /**
   * The supported range is 1-31
   */
  monthlyByDay?: number;

  /**
   * Number of occurences
   */
  count?: number;

  /**
   * Meeting expiration datetime
   */
  until?: string;
}

export default RecurrenceInfo;
