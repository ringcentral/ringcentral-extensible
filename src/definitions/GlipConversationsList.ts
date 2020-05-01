import {GlipConversationInfo, GlipNavigationInfo} from '.';

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
