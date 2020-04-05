import CreateGlipMember from './CreateGlipMember'

class GlipConversationInfo
{
    /// <summary>
    /// Internal identifier of a conversation
    /// </summary>
    id: string

    /// <summary>
    /// Type of a conversation
    /// Enum: Direct, Personal, Group
    /// </summary>
    type: string

    /// <summary>
    /// Conversation creation datetime in ISO 8601 format
    /// </summary>
    creationTime: string

    /// <summary>
    /// Conversation last change datetime in ISO 8601 format
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// List of glip members
    /// </summary>
    members: CreateGlipMember[]
}

export default GlipConversationInfo