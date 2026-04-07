import type TMChatInfo from "./TMChatInfo.js";
import type TMNavigationInfo from "./TMNavigationInfo.js";

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
