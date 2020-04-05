import GlipMentionsInfo from './GlipMentionsInfo'

class GlipPostEvent
{
    /// <summary>
    /// Internal identifier of a post
    /// </summary>
    id: string

    /// <summary>
    /// Type of a post event
    /// Enum: PostAdded, PostChanged, PostRemoved
    /// </summary>
    eventType: string

    /// <summary>
    /// Internal identifier of a group a post belongs to
    /// </summary>
    groupId: string

    /// <summary>
    /// Type of a post. 'TextMessage' - an incoming text message; 'PersonJoined' - a message notifying that person has joined a conversation; 'PersonsAdded' - a message notifying that a person(s) were added to a conversation
    /// Enum: TextMessage, PersonJoined, PersonsAdded, Card
    /// </summary>
    type: string

    /// <summary>
    /// For 'TextMessage' post type only. Message text
    /// </summary>
    text: string

    /// <summary>
    /// Internal identifier of a user - author of a post
    /// </summary>
    creatorId: string

    /// <summary>
    /// For PersonsAdded post type only. Identifiers of persons added to a group
    /// </summary>
    addedPersonIds: string[]

    /// <summary>
    /// For PersonsRemoved post type only. Identifiers of persons removed from a group
    /// </summary>
    removedPersonIds: string[]

    /// <summary>
    /// List of at mentions in post text with names.
    /// </summary>
    mentions: GlipMentionsInfo[]

    /// <summary>
    /// Post creation datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
    /// </summary>
    creationTime: string

    /// <summary>
    /// Post last change datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
    /// </summary>
    lastModifiedTime: string
}

export default GlipPostEvent