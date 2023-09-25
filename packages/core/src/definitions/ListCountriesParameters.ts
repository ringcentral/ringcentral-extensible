/**
 * Query parameters for operation listCountries
 */
interface ListCountriesParameters {
  /**
   * Specifies whether the logging-in with the phone numbers of this country
   *  is enabled or not
   */
  loginAllowed?: boolean;

  /**
   * Indicates whether a signup/billing is allowed for a country. If
   *  not specified all countries are returned (according to other
   *  specified filters if any)
   */
  signupAllowed?: boolean;

  /**
   * Specifies if RingCentral sells phone numbers of this country
   */
  numberSelling?: boolean;

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
   * Specifies if free phone line for softphone is available for a
   *  country or not
   */
  freeSoftphoneLine?: boolean;
}

export default ListCountriesParameters;
