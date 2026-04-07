/**
 * Appearance phone numbers information. Supported only for Delegated Lines Group extensions
 */
interface AppearanceInfo {
  /**
   * Appearance phone number
   */
  phoneNumber?: string;

  /**
   * Appearance number. The value range is from 1 to 8
   * Format: int32
   */
  appearanceNumber?: number;
}

export default AppearanceInfo;
