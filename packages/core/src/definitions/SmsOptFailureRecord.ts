import ApiError from "./ApiError.js";

interface SmsOptFailureRecord {
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

  /**
   * Consent status of a recipient's phone number:
   *  - `OptOut` - The number is opted out of receiving SMS.
   *  - `OptIn` - The number is opted in to receiving SMS (if it was previously opted out).
   * Required
   * Example: OptOut
   */
  optStatus?: "OptOut" | "OptIn";

  /**
   * The source of the consent record
   * Required
   */
  source?: "Recipient" | "Api" | "Upstream" | "Carrier";

  /**
   * Required
   */
  error?: ApiError;
}

export default SmsOptFailureRecord;
