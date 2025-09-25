/**
 * Query parameters for operation checkUserPermission
 */
interface CheckUserPermissionParameters {
  /**
   * The ID of the permission to be checked
   */
  permissionId?: string;

  /**
   * The target extension ID (that can be an "object" of certain permissions)
   */
  targetExtensionId?: string;
}

export default CheckUserPermissionParameters;
