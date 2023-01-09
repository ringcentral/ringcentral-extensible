interface TMPreferencesInfoChats {
  /**
   * Format: int32
   */
  maxCount?: number;

  /**
   * Default: CombineAllChatTypes
   */
  leftRailMode?: ('SeparateAllChatTypes' | 'SeparateConversationsAndTeams' | 'CombineAllChatTypes');
}

export default TMPreferencesInfoChats;
