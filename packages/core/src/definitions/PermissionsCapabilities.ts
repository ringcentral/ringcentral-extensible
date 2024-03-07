/**
 * Advanced permissions capabilities. Returned if `advancedPermissions` query parameter is set to `true`.
 */
interface PermissionsCapabilities {
  /**
   * Specifies whether the user is enabled with the listed permission or not
   */
  enabled?: boolean;

  /**
   * Specifies if the user can manage the listed permission and is allowed to enable it on other users
   */
  manageEnabled?: boolean;

  /**
   * Specifies if the users who were enabled with the listed permission can grant it further to other users
   */
  grantEnabled?: boolean;
}

export default PermissionsCapabilities;
