import type TMChatInfo from "./TMChatInfo";

interface TMChatListWithoutNavigation {
  /**
   * List of chats
   * Required
   */
  records?: TMChatInfo[];
}

export default TMChatListWithoutNavigation;
