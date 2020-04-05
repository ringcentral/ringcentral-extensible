import GlipMemberInfo from './GlipMemberInfo'

class GlipChatInfo
{
    /**
     * Internal identifier of a chat
     */
    id: string

    /**
     * Type of a chat
     * Enum: Everyone, Team, Group, Direct, Personal
     */
    type: string

    /**
     * For 'Team' chat type only. Team access level.
     */
    public: boolean

    /**
     * For 'Team','Everyone' chats types only. Chat name.
     */
    name: string

    /**
     * For 'Team','Everyone' chats types only. Chat description.
     */
    description: string

    /**
     * For 'Team' chat type only. Team status.
     * Enum: Active, Archived
     */
    status: string

    /**
     * Chat creation datetime in ISO 8601 format
     */
    creationTime: string

    /**
     * Chat last change datetime in ISO 8601 format
     */
    lastModifiedTime: string

    /**
     */
    members: GlipMemberInfo[]
}

export default GlipChatInfo