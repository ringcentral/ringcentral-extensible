import TMConversationInfo from './TMConversationInfo';
import TMNavigationInfo from './TMNavigationInfo';

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
