class MessageAttachmentInfo
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
    /// Supported for `Voicemail` only. Duration of a voicemail in seconds
    /// </summary>
    vmDuration: number

    /// <summary>
    /// Name of a file attached
    /// </summary>
    fileName: string

    /// <summary>
    /// Size of attachment in bytes
    /// </summary>
    size: number

    /// <summary>
    /// Attachment height in pixels if available
    /// </summary>
    height: number

    /// <summary>
    /// Attachment width in pixels if available
    /// </summary>
    width: number
}

export default MessageAttachmentInfo