import { PermissionInfoAdmin, PermissionInfoInt } from './index';

/**
 * Extension permissions, corresponding to the Service Web permissions 'Admin' and 'InternationalCalling'
*/
class ExtensionPermissions {
  /**
   */
  admin?: PermissionInfoAdmin;

  /**
   */
  internationalCalling?: PermissionInfoInt;
}
export default ExtensionPermissions;
