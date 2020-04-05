import GlipMessageAttachmentAuthorInfo from './GlipMessageAttachmentAuthorInfo'
import GlipMessageAttachmentFieldsInfo from './GlipMessageAttachmentFieldsInfo'
import GlipMessageAttachmentFootnoteInfo from './GlipMessageAttachmentFootnoteInfo'

class GlipMessageAttachmentInfoRequest
{
    /// <summary>
    /// Type of attachment
    /// Default: Card
    /// Enum: Card, Event, Note
    /// </summary>
    type: string

    /// <summary>
    /// Attachment title
    /// </summary>
    title: string

    /// <summary>
    /// Default message returned in case the client does not support interactive messages
    /// </summary>
    fallback: string

    /// <summary>
    /// Color of Event title, including its presentation in Calendar; or the color of the side border of an interactive message of a Card. The default color is 'Black'
    /// </summary>
    color: string

    /// <summary>
    /// Introductory text displayed directly above a message
    /// </summary>
    intro: string

    /// <summary>
    /// Information about the author
    /// </summary>
    author: GlipMessageAttachmentAuthorInfo

    /// <summary>
    /// Text of attachment (up to 1000 chars), supports GlipDown
    /// </summary>
    text: string

    /// <summary>
    /// Link to an image displayed at the bottom of a message
    /// </summary>
    imageUri: string

    /// <summary>
    /// Link to an image preview displayed to the right of a message (82x82)
    /// </summary>
    thumbnailUri: string

    /// <summary>
    /// Individual subsections within a message
    /// </summary>
    fields: GlipMessageAttachmentFieldsInfo[]

    /// <summary>
    /// Message footer information
    /// </summary>
    footnote: GlipMessageAttachmentFootnoteInfo

    /// <summary>
    /// Datetime of starting an event
    /// </summary>
    startTime: string

    /// <summary>
    /// Datetime of ending an event
    /// </summary>
    endTime: string

    /// <summary>
    /// Indicates whether an event has some specific time slot or lasts for the whole day(s)
    /// </summary>
    allDay: boolean

    /// <summary>
    /// Event recurrence settings. For non-periodic events the value is 'None'. Must be greater or equal to event duration: 1- Day/Weekday; 7 - Week; 28 - Month; 365 - Year
    /// Enum: None, Day, Weekday, Week, Month, Year
    /// </summary>
    recurrence: string

    /// <summary>
    /// Condition of ending an event
    /// </summary>
    endingCondition: string
}

export default GlipMessageAttachmentInfoRequest