/**
 * Query parameters for operation listPermissions
*/
interface ListPermissionsParameters {
  /**
   * Default: 1
   */
  page?: string;

  /**
   * Default: 100
   */
  perPage?: string;

  /**
   */
  assignable?: boolean;

  /**
   */
  servicePlanId?: string;
}

export default ListPermissionsParameters;
