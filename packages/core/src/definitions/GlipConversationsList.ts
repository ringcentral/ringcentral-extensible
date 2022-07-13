import GlipConversationInfo from './GlipConversationInfo';
import GlipNavigationInfo from './GlipNavigationInfo';

interface GlipConversationsList {
  /**
   * List of conversations
   * Required
   */
  records?: GlipConversationInfo[];

  /**
   */
  navigation?: GlipNavigationInfo;
}

export default GlipConversationsList;
