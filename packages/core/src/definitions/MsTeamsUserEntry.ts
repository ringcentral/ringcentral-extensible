interface MsTeamsUserEntry {
  /**
   * RingCentral extension ID of the user to connect
   * Required
   */
  extensionId?: string;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Required
   * Example: +16501234567
   */
  phoneNumber?: string;
}

export default MsTeamsUserEntry;
