import DevicesSearchOrderBy from './DevicesSearchOrderBy';

interface DevicesSearch {
  /**
   * String value to filter the devices. Should being found by fields name, extensionName, phoneNumber, serial, extensionNumber
   */
  searchString?: string;

  /**
   * Filtering by order status.
   */
  orderStatuses?: ('InProgress' | 'PendingReplacement' | 'Delivered')[];

  /**
   * Internal identifiers of the business sites to which devices belong.
   */
  siteIds?: string[];

  /**
   * Internal identifiers (codes) of the device types
   */
  types?: string[];

  /**
   * Internal identifiers (codes) of the device types to exclude from the response
   */
  excludeTypes?: string[];

  /**
   * A list of Country IDs
   */
  countryIds?: string[];

  /**
   * A list of area codes
   */
  areaCodes?: string[];

  /**
   * Filtering by assigned type
   */
  assignedTypes?: ('AssignedUserPhone' | 'UnassignedUserPhone' | 'UnassignedPhone')[];

  /**
   * Page number
   * Format: int32
   */
  page?: number;

  /**
   * Number of records returned per page.
   * Format: int32
   */
  perPage?: number;

  /**
   */
  orderBy?: DevicesSearchOrderBy[];
}

export default DevicesSearch;
