/**
 * To use as selection hint when a "toll" number to be selected from the number pool.
*/
interface PhoneNumberDefinitionPreferredAreaCode {
  /**
   * Preferred area code to use if numbers available
   * Required
   * Example: 650
   */
  preferredAreaCode?: string;
}

export default PhoneNumberDefinitionPreferredAreaCode;
