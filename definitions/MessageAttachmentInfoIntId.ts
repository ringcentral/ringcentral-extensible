class MessageAttachmentInfoIntId
{
    /// <summary>
    /// Internal identifier of a message attachment
    /// </summary>
    id: number

    /// <summary>
    /// Canonical URI of a message attachment
    /// </summary>
    uri: string

    /// <summary>
    /// Type of message attachment
    /// Enum: AudioRecording, AudioTranscription, Text, SourceDocument, RenderedDocument, MmsAttachment
    /// </summary>
    type: string

    /// <summary>
    /// MIME type for a given attachment, for instance 'audio/wav'
    /// </summary>
    contentType: string

    /// <summary>
    /// Voicemail only Duration of the voicemail in seconds
    /// </summary>
    vmDuration: number

    /// <summary>
    /// Name of a file attached
    /// </summary>
    filename: string

    /// <summary>
    /// Size of attachment in bytes
    /// </summary>
    size: number
}

export default MessageAttachmentInfoIntId