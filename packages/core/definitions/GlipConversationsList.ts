import {GlipConversationInfo, GlipNavigationInfo} from './index';

class GlipConversationsList {
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
