/**
 * To use as selection criteria when a number to be selected from the number pool.
 */
interface PhoneNumberDefinitionTollType {
  /**
   * Indicates if a number is toll or toll-free
   * Required
   * Example: Toll
   */
  tollType?: 'Toll' | 'TollFree';
}

export default PhoneNumberDefinitionTollType;
