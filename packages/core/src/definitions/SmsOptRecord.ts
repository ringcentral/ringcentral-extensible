interface SmsOptRecord {
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

  /**
   * Opt status of a recipient's phone number:
   *  - `OptOut` - the number is opted out for SMS;
   *  - `OptIn` - the number is opted in for SMS (if it was previously opted-out).
   * Required
   * Example: OptOut
   */
  optStatus?: "OptOut" | "OptIn";

  /**
   * The source of opt record
   * Required
   */
  source?: "Recipient" | "Api" | "Upstream" | "Carrier";

  /**
   * The time when the record was last updated
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;
}

export default SmsOptRecord;
