/**
 * Query parameters for operation listDomesticCountries
*/
interface ListDomesticCountriesParameters {
  /**
   * Indicates the page number to retrieve. Only positive number values are accepted
   * Default: 1
   */
  page?: number;

  /**
   * Indicates the page size (number of items)
   * Default: 100
   */
  perPage?: number;
}

export default ListDomesticCountriesParameters;
