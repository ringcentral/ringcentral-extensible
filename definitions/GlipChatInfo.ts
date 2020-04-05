import GlipMemberInfo from './GlipMemberInfo'

class GlipChatInfo
{
    /// <summary>
    /// Internal identifier of a chat
    /// </summary>
    id: string

    /// <summary>
    /// Type of a chat
    /// Enum: Everyone, Team, Group, Direct, Personal
    /// </summary>
    type: string

    /// <summary>
    /// For 'Team' chat type only. Team access level.
    /// </summary>
    public: boolean

    /// <summary>
    /// For 'Team','Everyone' chats types only. Chat name.
    /// </summary>
    name: string

    /// <summary>
    /// For 'Team','Everyone' chats types only. Chat description.
    /// </summary>
    description: string

    /// <summary>
    /// For 'Team' chat type only. Team status.
    /// Enum: Active, Archived
    /// </summary>
    status: string

    /// <summary>
    /// Chat creation datetime in ISO 8601 format
    /// </summary>
    creationTime: string

    /// <summary>
    /// Chat last change datetime in ISO 8601 format
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// </summary>
    members: GlipMemberInfo[]
}

export default GlipChatInfo