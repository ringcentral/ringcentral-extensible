class GlipTeamInfo
{
    /// <summary>
    /// Internal identifier of a team
    /// </summary>
    id: string

    /// <summary>
    /// Type of a chat
    /// Enum: Team
    /// </summary>
    type: string

    /// <summary>
    /// Team access level
    /// </summary>
    public: boolean

    /// <summary>
    /// Team name
    /// </summary>
    name: string

    /// <summary>
    /// Team description
    /// </summary>
    description: string

    /// <summary>
    /// Team status
    /// Enum: Active, Archived
    /// </summary>
    status: string

    /// <summary>
    /// Team creation datetime in ISO 8601 format
    /// </summary>
    creationTime: string

    /// <summary>
    /// Team last change datetime in ISO 8601 format
    /// </summary>
    lastModifiedTime: string
}

export default GlipTeamInfo