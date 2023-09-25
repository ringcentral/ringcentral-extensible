interface RecurrenceInfo {
  /**
   * Recurrence time frame
   */
  frequency?: 'Daily' | 'Weekly' | 'Monthly';

  /**
   * Recurrence interval. The supported ranges are: 1-90 for `Daily`; 1-12 for `Weekly`; 1-3 for `Monthly`
   * Format: int32
   */
  interval?: number;

  /**
   */
  weeklyByDays?: ('Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday')[];

  /**
   * The supported range is 1-31
   * Format: int32
   */
  monthlyByDay?: number;

  /**
   * Supported together with `weeklyByDay`
   */
  monthlyByWeek?: 'Last' | 'First' | 'Second' | 'Third' | 'Fourth';

  /**
   * This field is used only if you're scheduling a recurring meeting of type `3` to state a specific day in a week when the monthly meeting should recur; it works together with `MonthlyByWeek` field. The values are: 1 - Sunday; 2 - Monday; 3 - Tuesday; 4 - Wednesday; 5 - Thursday; 6 - Friday; 7- Saturday
   */
  monthlyByWeekDay?: 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

  /**
   * Number of meeting occurrences
   * Format: int32
   */
  count?: number;

  /**
   * Meeting expiration date-time
   */
  until?: string;
}

export default RecurrenceInfo;
