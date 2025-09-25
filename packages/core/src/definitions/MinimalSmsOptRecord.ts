interface MinimalSmsOptRecord {
  /**
   * The wildcard ('*') indicating that all account numbers should be opted out or opted in
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
