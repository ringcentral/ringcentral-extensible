class GlipMentionsInfo
{
    /**
     * Internal identifier of a user
     */
    id?: string

    /**
     * Type of mentions
     * Enum: Person, Team, File, Link, Event, Task, Note, Card
     */
    type?: string

    /**
     * Name of a user
     */
    name?: string
}

export default GlipMentionsInfo