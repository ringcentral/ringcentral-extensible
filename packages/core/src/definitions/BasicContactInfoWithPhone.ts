/**
 * Personal contact information
 */
interface BasicContactInfoWithPhone {
  /**
   * Given name
   * Example: John
   */
  firstName?: string;

  /**
   * Family name
   * Example: Smith
   */
  lastName?: string;

  /**
   * Contact email
   * Format: email
   * Example: john.smith@acme.com
   */
  email?: string;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Example: +16501234567
   */
  contactPhone?: string;
}

export default BasicContactInfoWithPhone;
