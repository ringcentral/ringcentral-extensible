/**
 * Personal contact information
*/
interface SystemUserContactInfo {
  /**
   * Given name
   * Required
   * Example: John
   */
  firstName?: string;

  /**
   * Family name
   * Required
   * Example: Smith
   */
  lastName?: string;

  /**
   * Contact email
   * Required
   * Format: email
   * Example: john.smith@acme.com
   */
  email?: string;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Required
   * Example: +16501234567
   */
  contactPhone?: string;

  /**
   * Internal identifier of System user extension
   * Required
   */
  id?: string;

  /**
   * Short number of an extension.
 *  Actual max length depends on system length limit for extension.
   * Required
   * Example: 205
   */
  extensionNumber?: string;
}

export default SystemUserContactInfo;
