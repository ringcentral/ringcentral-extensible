import TMChatInfo from "./TMChatInfo.js";
import TMNavigationInfo from "./TMNavigationInfo.js";

interface TMChatList {
  /**
   * List of chats
   * Required
   */
  records?: TMChatInfo[];

  /** */
  navigation?: TMNavigationInfo;
}

export default TMChatList;
