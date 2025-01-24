/**
 * Query parameters for operation getExtensionEmergencyLocations
 */
interface GetExtensionEmergencyLocationsParameters {
  /**
   * Internal identifier of a site for filtering. To indicate company main
   *  site `main-site` value should be specified. Supported only if multi-site feature
   *  is enabled for the account. Multiple values are supported.
   */
  siteId?: string[];

  /**
   * Filters entries by the specified substring (search by chassis
   *  ID, switch name or address) The characters range is 0-64 (if
   *  empty the filter is ignored)
   */
  searchString?: string;

  /** */
  domesticCountryId?: string;

  /**
   * Comma-separated list of fields to order results prefixed by '+'
   *  sign (ascending order) or '-' sign (descending order). The default
   *  sorting is by `name`
   * Default: +visibility
   */
  orderBy?:
    | "+name"
    | "+siteName"
    | "+address"
    | "+addressStatus"
    | "+usageStatus"
    | "+visibility"
    | "-name"
    | "-siteName"
    | "-address"
    | "-addressStatus"
    | "-usageStatus"
    | "-visibility";

  /**
   * Indicates a page size (number of items). The values supported:
   *  `Max` or numeric value. If not specified, 100 records are returned
   *  per one page
   * Format: int32
   */
  perPage?: number;

  /**
   * Indicates a page number to retrieve. Only positive
   *  number values are supported
   * Format: int32
   * Default: 1
   */
  page?: number;

  /** */
  visibility?: string;
}

export default GetExtensionEmergencyLocationsParameters;
