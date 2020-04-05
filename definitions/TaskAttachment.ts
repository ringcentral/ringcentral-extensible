class TaskAttachment
{
    /// <summary>
    /// Internal identifier of a file
    /// </summary>
    id: string

    /// <summary>
    /// Attachment type (currently only `File` value is supported).
    /// Enum: File
    /// </summary>
    type: string

    /// <summary>
    /// Name of the attached file (including extension name).
    /// </summary>
    name: string

    /// <summary>
    /// Link to an attachment content
    /// </summary>
    contentUri: string
}

export default TaskAttachment