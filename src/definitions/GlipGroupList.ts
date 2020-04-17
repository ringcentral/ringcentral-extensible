import { GlipGroupInfo, GlipNavigationInfo } from '.'

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
