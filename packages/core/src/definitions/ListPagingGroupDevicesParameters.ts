/**
 * Query parameters for operation listPagingGroupDevices
*/
interface ListPagingGroupDevicesParameters {
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
}

export default ListPagingGroupDevicesParameters;
