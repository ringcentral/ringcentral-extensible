interface EventRecurrenceInfo {
  /**
   * Event recurrence settings. For non-periodic events the value
   *  is `None`. Must be greater or equal to event duration: 1- Day/Weekday;
   *  7 - Week; 28 - Month; 365 - Year
   */
  schedule?: 'None' | 'Day' | 'Weekday' | 'Week' | 'Month' | 'Year';

  /**
   * Condition of ending an event
   */
  endingCondition?: 'None' | 'Count' | 'Date';

  /**
   * Count of event iterations. For periodic events only. Value range is 1 - 10.
   *  Must be specified if `endingCondition` is `Count`
   * Format: int32
   */
  endingAfter?: number;

  /**
   * Iterations ending datetime for periodic events in
   *  [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
   * Format: date-time
   */
  endingOn?: string;
}

export default EventRecurrenceInfo;
