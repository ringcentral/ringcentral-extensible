/**
 * Personal contact information
*/
interface BasicContactInfo {
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
}

export default BasicContactInfo;
