/**
 * Information on a blocked/allowed phone number
 */
interface BlockedAllowedPhoneNumberInfo {
  /**
   * Link to a blocked/allowed phone number
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a blocked/allowed phone number
   */
  id?: string;

  /**
   * A blocked/allowed phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format
   */
  phoneNumber?: string;

  /**
   * Custom name of a blocked/allowed phone number
   */
  label?: string;

  /**
   * Status of a phone number
   * Default: Blocked
   */
  status?: "Blocked" | "Allowed";
}

export default BlockedAllowedPhoneNumberInfo;
