import GlipChatInfo from './GlipChatInfo';
import GlipNavigationInfo from './GlipNavigationInfo';

class GlipChatsList {
  /**
   * List of chats
   * Required
   */
  records?: GlipChatInfo[];

  /**
   */
  navigation?: GlipNavigationInfo;
}

export default GlipChatsList;
