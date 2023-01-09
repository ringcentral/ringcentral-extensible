/**
 * Query parameters for operation readTimezone
*/
interface ReadTimezoneParameters {
  /**
   * Indicates a page number to retrieve. Only positive number values
 *  are accepted
   * Default: 1
   */
  page?: string;

  /**
   * Indicates a page size (number of items)
   * Default: 100
   */
  perPage?: string;
}

export default ReadTimezoneParameters;
