/**
 * Used as selection hint when a "toll" number is selected from the number pool
 */
interface PhoneNumberDefinitionPreferredAreaCode {
  /**
   * Preferred area code to use if the numbers are available
   * Required
   * Example: 650
   */
  preferredAreaCode?: string;

  /**
   * Indicates if a number is toll or toll-free
   * Example: Toll
   */
  tollType?: "Toll" | "TollFree";

  /**
   * Type of a phone number
   */
  type?: "VoiceFax" | "VoiceOnly" | "FaxOnly";
}

export default PhoneNumberDefinitionPreferredAreaCode;
