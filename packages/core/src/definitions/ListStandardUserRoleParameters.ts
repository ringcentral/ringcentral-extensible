/**
 * Query parameters for operation listStandardUserRole
 */
interface ListStandardUserRoleParameters {
  /**
   * Internal identifier of a service plan.
   */
  servicePlanId?: string;

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
   * Specifies whether to return advanced permissions capabilities within `permissionsCapabilities` resource.
   *  The default value is false
   */
  advancedPermissions?: boolean;
}

export default ListStandardUserRoleParameters;
