class GlipMentionsInfo
{
    /// <summary>
    /// Internal identifier of a user
    /// </summary>
    id: string

    /// <summary>
    /// Type of mentions
    /// Enum: Person, Team, File, Link, Event, Task, Note, Card
    /// </summary>
    type: string

    /// <summary>
    /// Name of a user
    /// </summary>
    name: string
}

export default GlipMentionsInfo