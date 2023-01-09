/**
 * Query parameters for operation listTimezones
*/
interface ListTimezonesParameters {
  /**
   * Indicates the page number to retrieve. Only positive number values
 *  are accepted
   * Default: 1
   */
  page?: string;

  /**
   * Indicates the page size (number of items)
   * Default: 100
   */
  perPage?: string;
}

export default ListTimezonesParameters;
