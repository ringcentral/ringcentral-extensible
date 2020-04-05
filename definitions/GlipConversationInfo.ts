import CreateGlipMember from './CreateGlipMember'

class GlipConversationInfo
{
    /**
     * Internal identifier of a conversation
     */
    id: string

    /**
     * Type of a conversation
     * Enum: Direct, Personal, Group
     */
    type: string

    /**
     * Conversation creation datetime in ISO 8601 format
     */
    creationTime: string

    /**
     * Conversation last change datetime in ISO 8601 format
     */
    lastModifiedTime: string

    /**
     * List of glip members
     */
    members: CreateGlipMember[]
}

export default GlipConversationInfo