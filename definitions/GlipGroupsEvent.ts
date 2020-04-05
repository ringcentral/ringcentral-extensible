import GlipMemberInfo from './GlipMemberInfo'

class GlipGroupsEvent
{
    /// <summary>
    /// Internal identifier of a group
    /// </summary>
    id: string

    /// <summary>
    /// Type of a group. 'PrivateChat' is a group of 2 members. 'Group' is a chat of 2 and more participants, the membership cannot be changed after group creation. 'Team' is a chat of 1 and more participants, the membership can be modified in future. 'PersonalChat' is a private chat thread of a user
    /// Enum: PrivateChat, Group, Team, PersonalChat
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
    /// “List of glip members”
    /// </summary>
    members: GlipMemberInfo[]

    /// <summary>
    /// Group creation datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
    /// </summary>
    creationTime: string

    /// <summary>
    /// Group last change datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// Type of a group event. Only the person who joined/was added to a group will receive 'GroupJoined' notification. Only the person who left/was removed from a group will receive 'GroupLeft' notification
    /// Enum: GroupRenamed, GroupJoined, GroupLeft, GroupChanged
    /// </summary>
    eventType: string
}

export default GlipGroupsEvent