interface MinimalSmsOptRecord {
  /**
   * The wildcard meaning that all account numbers should be opted out/in
   * Required
   * Example: +16501234567
   */
  from?: "*";

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Required
   * Example: +16501234567
   */
  to?: string;
}

export default MinimalSmsOptRecord;
