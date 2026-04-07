import type PermissionInfoAdmin from "./PermissionInfoAdmin.js";
import type PermissionInfoInt from "./PermissionInfoInt.js";

/**
 * Extension permissions, corresponding to the Service Web permissions
 * 'Admin' and 'InternationalCalling'
 *
 */
interface ExtensionPermissions {
  /**
   */
  admin?: PermissionInfoAdmin;

  /**
   */
  internationalCalling?: PermissionInfoInt;
}

export default ExtensionPermissions;
