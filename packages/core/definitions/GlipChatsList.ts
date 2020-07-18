import {GlipChatInfo, GlipNavigationInfo} from '.';

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
