import type TMConversationInfo from "./TMConversationInfo";
import type TMNavigationInfo from "./TMNavigationInfo";

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
