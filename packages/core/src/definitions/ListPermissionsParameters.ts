/**
 * Query parameters for operation listPermissions
 */
interface ListPermissionsParameters {
  /**
   * The result set page number (1-indexed) to return
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 1
   * Default: 1
   */
  page?: number;

  /**
   * The number of items per page. If provided value in the request
   *  is greater than a maximum, the maximum value is applied
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 100
   * Default: 100
   */
  perPage?: number;

  /**
   * Specifies whether to return only assignable permissions
   */
  assignable?: boolean;

  /**
   * Internal identifier of a service plan
   */
  servicePlanId?: string;
}

export default ListPermissionsParameters;
