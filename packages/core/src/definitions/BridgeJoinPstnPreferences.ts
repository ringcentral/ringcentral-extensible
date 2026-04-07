interface BridgeJoinPstnPreferences {
  /**
   * Specifies whether to play 'Announce yourself' prompt
   * Default: true
   */
  promptAnnouncement?: boolean;

  /**
   * Specifies whether to play 'There are X participants' prompt
   * Default: true
   */
  promptParticipants?: boolean;
}

export default BridgeJoinPstnPreferences;
