import GlipGroupInfo from './GlipGroupInfo'
import GlipNavigationInfo from './GlipNavigationInfo'

class GlipGroupList
{
  /**
   * List of groups/teams/private chats
   * Required
   */
  records?: GlipGroupInfo[]

  /**
   */
  navigation?: GlipNavigationInfo
}

export default GlipGroupList
