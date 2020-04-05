import GlipMessageAttachmentAuthorInfo from './GlipMessageAttachmentAuthorInfo'
import GlipMessageAttachmentFieldsInfo from './GlipMessageAttachmentFieldsInfo'
import GlipMessageAttachmentFootnoteInfo from './GlipMessageAttachmentFootnoteInfo'

class GlipMessageAttachmentInfo
{
    /// <summary>
    /// Internal identifier of an attachment
    /// </summary>
    id: string

    /// <summary>
    /// Type of an attachment
    /// Default: Card
    /// Enum: Card, Event, Note
    /// </summary>
    type: string

    /// <summary>
    /// A string of default text that will be rendered in the case that the client does not support Interactive Messages
    /// </summary>
    fallback: string

    /// <summary>
    /// A pretext to the message
    /// </summary>
    intro: string

    /// <summary>
    /// Information about the author
    /// </summary>
    author: GlipMessageAttachmentAuthorInfo

    /// <summary>
    /// Message title
    /// </summary>
    title: string

    /// <summary>
    /// A large string field (up to 1000 chars) to be displayed as the body of a message (Supports GlipDown)
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
    /// Information on navigation
    /// </summary>
    fields: GlipMessageAttachmentFieldsInfo[]

    /// <summary>
    /// Message Footer
    /// </summary>
    footnote: GlipMessageAttachmentFootnoteInfo

    /// <summary>
    /// Internal identifier of a person created an event
    /// </summary>
    creatorId: string

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
    /// Event recurrence settings.
    /// Enum: None, Day, Weekday, Week, Month, Year
    /// </summary>
    recurrence: string

    /// <summary>
    /// Condition of ending
    /// </summary>
    endingCondition: string

    /// <summary>
    /// Count of iterations. For periodic events only
    /// </summary>
    endingAfter: number

    /// <summary>
    /// Iterations end datetime for periodic events
    /// Default: None
    /// Enum: None, Count, Date
    /// </summary>
    endingOn: string

    /// <summary>
    /// Color of Event title, including its presentation in Calendar; or the color of the side border of an interactive message of a Card
    /// Default: Black
    /// Enum: Black, Red, Orange, Yellow, Green, Blue, Purple, Magenta
    /// </summary>
    color: string

    /// <summary>
    /// Event location
    /// </summary>
    location: string

    /// <summary>
    /// Event details
    /// </summary>
    description: string
}

export default GlipMessageAttachmentInfo