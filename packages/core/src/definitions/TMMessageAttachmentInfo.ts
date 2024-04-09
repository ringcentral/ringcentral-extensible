import type TMAttachmentAuthorInfo from './TMAttachmentAuthorInfo';
import type TMAttachmentFieldsInfo from './TMAttachmentFieldsInfo';
import type TMAttachmentFootnoteInfo from './TMAttachmentFootnoteInfo';

interface TMMessageAttachmentInfo {
  /**
   * Internal identifier of an attachment
   */
  id?: string;

  /**
   * Type of an attachment
   * Default: Card
   */
  type?: 'Card' | 'Event' | 'File' | 'Note' | 'Task';

  /**
   * A string of default text that will be rendered in the case that the client does not support Interactive Messages
   */
  fallback?: string;

  /**
   * A pretext to the message
   */
  intro?: string;

  /**
   */
  author?: TMAttachmentAuthorInfo;

  /**
   * Message title
   */
  title?: string;

  /**
   * A large string field (up to 1000 chars) to be displayed as the body of a message (Supports GlipDown)
   */
  text?: string;

  /**
   * Link to an image displayed at the bottom of a message
   * Format: uri
   */
  imageUri?: string;

  /**
   * Link to an image preview displayed to the right of a message (82x82)
   * Format: uri
   */
  thumbnailUri?: string;

  /**
   * Information on navigation
   */
  fields?: TMAttachmentFieldsInfo[];

  /**
   */
  footnote?: TMAttachmentFootnoteInfo;

  /**
   * Internal identifier of a person created an event
   */
  creatorId?: string;

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
   * Event recurrence settings.
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
   * Color of Event title, including its presentation in Calendar; or the color of the side border of an interactive message of a Card
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

export default TMMessageAttachmentInfo;
