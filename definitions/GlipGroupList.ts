import GlipGroupInfo from './GlipGroupInfo'
import GlipNavigationInfo from './GlipNavigationInfo'

class GlipGroupList
{
    /// <summary>
    /// List of groups/teams/private chats
    /// Required
    /// </summary>
    records: GlipGroupInfo[]

    /// <summary>
    /// </summary>
    navigation: GlipNavigationInfo
}

export default GlipGroupList