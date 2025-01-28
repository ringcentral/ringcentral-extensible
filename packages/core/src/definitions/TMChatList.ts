import TMChatInfo from "./TMChatInfo";
import TMNavigationInfo from "./TMNavigationInfo";

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
