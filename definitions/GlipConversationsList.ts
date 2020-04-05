import GlipConversationInfo from './GlipConversationInfo'
import GlipNavigationInfo from './GlipNavigationInfo'

class GlipConversationsList
{
    /**
     * List of conversations
     * Required
     */
    records?: GlipConversationInfo[]

    /**
     */
    navigation?: GlipNavigationInfo
}

export default GlipConversationsList