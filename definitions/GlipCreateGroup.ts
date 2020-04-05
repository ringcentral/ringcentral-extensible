import GlipMemberInfo from './GlipMemberInfo'

class GlipCreateGroup
{
    /// <summary>
    /// Type of a group to be created. 'PrivateChat' is a group of 2 members. 'Team' is a chat of 1 and more participants, the membership can be modified in future. 'PersonalChat' is a private chat thread of a user
    /// Required
    /// Enum: PrivateChat, Team
    /// </summary>
    type: string

    /// <summary>
    /// For 'Team' group type only. Team access level
    /// </summary>
    isPublic: boolean

    /// <summary>
    /// For 'Team' group type only. Team name
    /// </summary>
    name: string

    /// <summary>
    /// For 'Team' group type only. Team description
    /// </summary>
    description: string

    /// <summary>
    /// “List of glip members. For 'PrivateChat' group type 2 members only are supported”
    /// </summary>
    members: GlipMemberInfo[]
}

export default GlipCreateGroup