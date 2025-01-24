/**
 * Query parameters for operation listEmergencyLocations
 */
interface ListEmergencyLocationsParameters {
  /**
   * Internal identifier of a site for filtering. To indicate company main
   *  site `main-site` value should be specified. Supported only if multi-site feature
   *  is enabled for the account. Multiple values are supported.
   */
  siteId?: string[];

  /**
   * Filters entries containing the specified substring in 'address'
   *  and 'name' fields. The character range is 0-64; not case-sensitive.
   *  If empty then the filter is ignored
   */
  searchString?: string;

  /**
   * Emergency address status
   */
  addressStatus?: "Valid" | "Invalid" | "Provisioning";

  /** */
  usageStatus?: "Active" | "Inactive";

  /** */
  domesticCountryId?: string;

  /**
   * Comma-separated list of fields to order results, prefixed by
   *  plus sign '+' (ascending order) or minus sign '-' (descending order)
   * Default: +address
   */
  orderBy?:
    | "+name"
    | "+siteName"
    | "+address"
    | "+addressStatus"
    | "+usageStatus"
    | "-name"
    | "-siteName"
    | "-address"
    | "-addressStatus"
    | "-usageStatus";

  /**
   * Indicates a page size (number of items). The values
   *  supported: `Max` or numeric value. If not specified,
   *  100 records are returned per one page
   * Format: int32
   * Default: 100
   */
  perPage?: number;

  /**
   * Indicates the page number to retrieve. Only positive number values
   *  are supported
   * Format: int32
   * Default: 1
   */
  page?: number;
}

export default ListEmergencyLocationsParameters;
