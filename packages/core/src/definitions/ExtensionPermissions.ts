import PermissionInfoAdmin from './PermissionInfoAdmin';
import PermissionInfoInt from './PermissionInfoInt';

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
