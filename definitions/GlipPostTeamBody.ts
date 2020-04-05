import CreateGlipMember from './CreateGlipMember'

class GlipPostTeamBody
{
    /// <summary>
    /// Team access level.
    /// </summary>
    public: boolean

    /// <summary>
    /// Team name.
    /// Required
    /// </summary>
    name: string

    /// <summary>
    /// Team description.
    /// </summary>
    description: string

    /// <summary>
    /// List of glip members
    /// </summary>
    members: CreateGlipMember[]
}

export default GlipPostTeamBody