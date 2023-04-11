/**
 * Query parameters for operation listContacts
*/
interface ListContactsParameters {
  /**
   * If specified, only contacts which 'First name' or 'Last name' start
 *  with the mentioned substring will be returned. Case-insensitive
   */
  startsWith?: string;

  /**
   * Sorts results by the specified property
   */
  sortBy?: ('FirstName' | 'LastName' | 'Company')[];

  /**
   * The result set page number (1-indexed) to return
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 1
   * Default: 1
   */
  page?: number;

  /**
   * The number of items per page. If provided value in the request
 *  is greater than a maximum, the maximum value is applied
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 100
   * Default: 100
   */
  perPage?: number;

  /**
   * Phone number in e.164 format
   */
  phoneNumber?: string[];
}

export default ListContactsParameters;
