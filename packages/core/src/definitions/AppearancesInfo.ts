/**
 * Appearance phone numbers information. Supported only for Delegated Lines Group extensions
 */
interface AppearancesInfo {
  /**
   * Appearance phone number
   */
  phoneNumber?: string;

  /**
   * Appearance number. The value range is from 1 to 8
   * Format: int32
   */
  appearanceNumber?: number;

  /**
   * Appearance line status. The two possible values: 'Seized' - the phone line is busy; 'Released' - the phone line is open
   */
  lineStatus?: "Seized" | "Released";
}

export default AppearancesInfo;
