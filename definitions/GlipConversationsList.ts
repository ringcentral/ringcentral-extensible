import GlipConversationInfo from './GlipConversationInfo'
import GlipNavigationInfo from './GlipNavigationInfo'

class GlipConversationsList
{
    /// <summary>
    /// List of conversations
    /// Required
    /// </summary>
    records: GlipConversationInfo[]

    /// <summary>
    /// </summary>
    navigation: GlipNavigationInfo
}

export default GlipConversationsList