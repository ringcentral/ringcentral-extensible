import CreateGlipMember from './CreateGlipMember'

class GlipPostTeamBody
{
    /**
     * Team access level.
     */
    public: boolean

    /**
     * Team name.
     * Required
     */
    name: string

    /**
     * Team description.
     */
    description: string

    /**
     * List of glip members
     */
    members: CreateGlipMember[]
}

export default GlipPostTeamBody