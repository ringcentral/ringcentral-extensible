/**
 * Filtering criteria when a number is selected from the number pool
*/
interface PhoneNumberDefinitionTollType {
    /**
   * Indicates if a number is toll or toll-free
   * Required
   * Example: Toll
   */
  tollType?: ('Toll' | 'TollFree');

  /**
   * Type of a phone number
   */
  type?: ('VoiceFax' | 'VoiceOnly' | 'FaxOnly');
}

export default PhoneNumberDefinitionTollType;
