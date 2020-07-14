import {
  GlipMessageAttachmentAuthorInfo,
  GlipMessageAttachmentFieldsInfo,
  GlipMessageAttachmentFootnoteInfo,
} from '.';

class GlipAttachmentInfoRequest {
  /**
   * Type of attachment
   * Default: Card
   */
  type?: 'Card' | 'Event' | 'Note';

  /**
   * Attachment title
   */
  title?: string;

  /**
   * Default message returned in case the client does not support interactive messages
   */
  fallback?: string;

  /**
   * Color of Event title, including its presentation in Calendar; or the color of the side border of an interactive message of a Card. The default color is 'Black'
   */
  color?: string;

  /**
   * Introductory text displayed directly above a message
   */
  intro?: string;

  /**
   * Information about the author
   */
  author?: GlipMessageAttachmentAuthorInfo;

  /**
   * Text of attachment (up to 1000 chars), supports GlipDown
   */
  text?: string;

  /**
   * Link to an image displayed at the bottom of a message
   */
  imageUri?: string;

  /**
   * Link to an image preview displayed to the right of a message (82x82)
   */
  thumbnailUri?: string;

  /**
   * Individual subsections within a message
   */
  fields?: GlipMessageAttachmentFieldsInfo[];

  /**
   * Message footer information
   */
  footnote?: GlipMessageAttachmentFootnoteInfo;

  /**
   * Datetime of starting an event
   */
  startTime?: string;

  /**
   * Datetime of ending an event
   */
  endTime?: string;

  /**
   * Indicates whether an event has some specific time slot or lasts for the whole day(s)
   */
  allDay?: boolean;

  /**
   * Event recurrence settings. For non-periodic events the value is 'None'. Must be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month; 365 - Year
   */
  recurrence?: 'None' | 'Day' | 'Weekday' | 'Week' | 'Month' | 'Year';

  /**
   * Condition of ending an event
   */
  endingCondition?: string;
}

export default GlipAttachmentInfoRequest;
