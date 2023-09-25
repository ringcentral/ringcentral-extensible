/**
 * Query parameters for operation listDevicesAutomaticLocationUpdates
 */
interface ListDevicesAutomaticLocationUpdatesParameters {
  /**
   * Internal identifier of a site for filtering. To indicate company main
   *  site `main-site` value should be specified. Supported only if multi-site feature
   *  is enabled for the account. Multiple values are supported.
   */
  siteId?: string[];

  /**
   * Filters entries by their status of Automatic Location Updates
   *  feature
   */
  featureEnabled?: boolean;

  /**
   * Internal identifier of a device model for filtering. Multiple
   *  values are supported
   */
  modelId?: string;

  /**
   * Filters devices which support HELD protocol
   */
  compatibleOnly?: boolean;

  /**
   * Filters entries which have device name or model name containing
   *  the mentioned substring. The value should be split by spaces; the range
   *  is 0 - 64 characters, not case-sensitive. If empty the filter is ignored
   */
  searchString?: string;

  /**
   * Comma-separated list of fields to order results prefixed by
   *  plus sign '+' (ascending order) or minus sign '-' (descending order).
   *  Supported values: 'name', 'modelName', 'siteName', 'featureEnabled'.
   *  The default sorting is by `name`
   */
  orderBy?: string;

  /**
   * Indicates a page size (number of items). The values supported:
   *  `Max` or numeric value. If not specified, 100 records are returned per one
   *  page
   * Format: int32
   */
  perPage?: number;

  /**
   * Indicates a page number to retrieve. Only positive number values
   *  are supported
   * Format: int32
   * Default: 1
   */
  page?: number;
}

export default ListDevicesAutomaticLocationUpdatesParameters;
