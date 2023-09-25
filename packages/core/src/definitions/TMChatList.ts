import type TMChatInfo from './TMChatInfo';
import type TMNavigationInfo from './TMNavigationInfo';

interface TMChatList {
  /**
   * List of chats
   * Required
   */
  records?: TMChatInfo[];

  /**
   */
  navigation?: TMNavigationInfo;
}

export default TMChatList;
