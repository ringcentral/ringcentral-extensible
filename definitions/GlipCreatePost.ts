import GlipMessageAttachmentInfoRequest from './GlipMessageAttachmentInfoRequest'

class GlipCreatePost
{
    /// <summary>
    /// Title of a message. (Can be set for bot's messages only).
    /// </summary>
    title: string

    /// <summary>
    /// Text of a post
    /// Maximum: 1000
    /// </summary>
    text: string

    /// <summary>
    /// Internal identifier of a group
    /// </summary>
    groupId: string

    /// <summary>
    /// List of attachments to be posted
    /// </summary>
    attachments: GlipMessageAttachmentInfoRequest[]
}

export default GlipCreatePost