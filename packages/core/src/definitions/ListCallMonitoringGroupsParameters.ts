/**
 * Query parameters for operation listCallMonitoringGroups
*/
interface ListCallMonitoringGroupsParameters {
  /**
   * Indicates a page number to retrieve. Only positive number values
 *  are allowed
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
   * Internal identifier of an extension that is a member of every
 *  group within the result
   */
  memberExtensionId?: string;
}

export default ListCallMonitoringGroupsParameters;
