import GlipMessageAttachmentInfoRequest from './GlipMessageAttachmentInfoRequest'

class GlipCreatePost
{
    /**
     * Title of a message. (Can be set for bot's messages only).
     */
    title: string

    /**
     * Text of a post
     * Maximum: 1000
     */
    text: string

    /**
     * Internal identifier of a group
     */
    groupId: string

    /**
     * List of attachments to be posted
     */
    attachments: GlipMessageAttachmentInfoRequest[]
}

export default GlipCreatePost