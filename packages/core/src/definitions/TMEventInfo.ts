interface TMEventInfo {
  /**
   * Internal identifier of an event
   */
  id?: string;

  /**
   * Internal identifier of a person created an event
   */
  creatorId?: string;

  /**
   * Event title
   */
  title?: string;

  /**
   * Datetime of starting an event
   * Format: date-time
   */
  startTime?: string;

  /**
   * Datetime of ending an event
   * Format: date-time
   */
  endTime?: string;

  /**
   * Indicates whether an event has some specific time slot or lasts for the whole day(s)
   */
  allDay?: boolean;

  /**
   * Event recurrence settings
   */
  recurrence?: 'None' | 'Day' | 'Weekday' | 'Week' | 'Month' | 'Year';

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
   * Iterations ending datetime for periodic events in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
   * Format: date-time
   */
  endingOn?: string;

  /**
   * Color of Event title (including its presentation in Calendar)
   * Default: Black
   */
  color?: 'Black' | 'Red' | 'Orange' | 'Yellow' | 'Green' | 'Blue' | 'Purple' | 'Magenta';

  /**
   * Event location
   */
  location?: string;

  /**
   * Event details
   */
  description?: string;
}

export default TMEventInfo;
