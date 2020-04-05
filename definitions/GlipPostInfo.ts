import GlipMessageAttachmentInfo from './GlipMessageAttachmentInfo'
import GlipMentionsInfo from './GlipMentionsInfo'

class GlipPostInfo
{
    /// <summary>
    /// Internal identifier of a post
    /// </summary>
    id: string

    /// <summary>
    /// Internal identifier of a group a post belongs to
    /// </summary>
    groupId: string

    /// <summary>
    /// Type of a post
    /// Enum: TextMessage, PersonJoined, PersonsAdded
    /// </summary>
    type: string

    /// <summary>
    /// For 'TextMessage' post type only. Text of a message
    /// </summary>
    text: string

    /// <summary>
    /// Internal identifier of a user - author of a post
    /// </summary>
    creatorId: string

    /// <summary>
    /// For 'PersonsAdded' post type only. Identifiers of persons added to a group
    /// </summary>
    addedPersonIds: string[]

    /// <summary>
    /// Post creation datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
    /// </summary>
    creationTime: string

    /// <summary>
    /// Post last modification datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// List of posted attachments
    /// </summary>
    attachments: GlipMessageAttachmentInfo[]

    /// <summary>
    /// </summary>
    mentions: GlipMentionsInfo[]

    /// <summary>
    /// Label of activity type
    /// </summary>
    activity: string

    /// <summary>
    /// Title of a message. (Can be set for bot's messages only)
    /// </summary>
    title: string

    /// <summary>
    /// Link to an image used as an icon for this message
    /// </summary>
    iconUri: string

    /// <summary>
    /// Emoji used as an icon for this message
    /// </summary>
    iconEmoji: string
}

export default GlipPostInfo