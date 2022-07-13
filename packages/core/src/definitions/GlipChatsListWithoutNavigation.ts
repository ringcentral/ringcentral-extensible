import GlipChatInfo from './GlipChatInfo';

interface GlipChatsListWithoutNavigation {
  /**
   * List of chats
   * Required
   */
  records?: GlipChatInfo[];
}

export default GlipChatsListWithoutNavigation;
