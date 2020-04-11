import GlipMemberInfo from './GlipMemberInfo'

class GlipCreateGroup
{
  /**
   * Type of a group to be created. 'PrivateChat' is a group of 2 members. 'Team' is a chat of 1 and more participants, the membership can be modified in future. 'PersonalChat' is a private chat thread of a user
   * Required
   */
  type?: ('PrivateChat' | 'Team')

  /**
   * For 'Team' group type only. Team access level
   */
  isPublic?: boolean

  /**
   * For 'Team' group type only. Team name
   */
  name?: string

  /**
   * For 'Team' group type only. Team description
   */
  description?: string

  /**
   * “List of glip members. For 'PrivateChat' group type 2 members only are supported”
   */
  members?: GlipMemberInfo[]
}

export default GlipCreateGroup
