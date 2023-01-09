/**
 * Query parameters for operation listStates
*/
interface ListStatesParameters {
  /**
   * If set to 'True' then states of all countries are returned and
 *  `countryId` is ignored, even if specified. If the value is empty
 *  then the parameter is ignored
   */
  allCountries?: boolean;

  /**
   * Internal identifier of a country
   * Format: int64
   */
  countryId?: number;

  /**
   * Indicates a page number to retrieve. Only positive number values
 *  are accepted
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Indicates a page size (number of items)
   * Format: int32
   * Default: 100
   */
  perPage?: number;

  /**
   * If 'True' the list of states with phone numbers available for
 *  buying is returned
   */
  withPhoneNumbers?: boolean;
}

export default ListStatesParameters;
