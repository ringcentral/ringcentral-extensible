import type TMConversationInfo from "./TMConversationInfo.js";
import type TMNavigationInfo from "./TMNavigationInfo.js";

interface TMConversationList {
  /**
   * List of conversations
   * Required
   */
  records?: TMConversationInfo[];

  /**
   */
  navigation?: TMNavigationInfo;
}

export default TMConversationList;
