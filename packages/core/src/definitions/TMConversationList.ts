import TMConversationInfo from "./TMConversationInfo.js";
import TMNavigationInfo from "./TMNavigationInfo.js";

interface TMConversationList {
  /**
   * List of conversations
   * Required
   */
  records?: TMConversationInfo[];

  /** */
  navigation?: TMNavigationInfo;
}

export default TMConversationList;
