interface SBCMoveToRCV {
  /**
   * Array of parties to drop from session
   */
  dropParties?: string[];

  /**
   * RCV token for Server Based Conferencing
   */
  rcvToken?: string;
}

export default SBCMoveToRCV;
