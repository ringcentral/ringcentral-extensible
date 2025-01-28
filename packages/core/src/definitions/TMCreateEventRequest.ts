import EventRecurrenceInfo from "./EventRecurrenceInfo";

interface TMCreateEventRequest {
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
   * Required
   */
  title?: string;

  /**
   * Datetime of starting an event
   * Required
   * Format: date-time
   */
  startTime?: string;

  /**
   * Datetime of ending an event
   * Required
   * Format: date-time
   */
  endTime?: string;

  /**
   * Indicates whether event has some specific time slot or lasts for whole day(s)
   */
  allDay?: boolean;

  /** */
  recurrence?: EventRecurrenceInfo;

  /**
   * Color of Event title (including its presentation in Calendar)
   * Default: Black
   */
  color?:
    | "Black"
    | "Red"
    | "Orange"
    | "Yellow"
    | "Green"
    | "Blue"
    | "Purple"
    | "Magenta";

  /**
   * Event location
   */
  location?: string;

  /**
   * Event details
   */
  description?: string;
}

export default TMCreateEventRequest;
