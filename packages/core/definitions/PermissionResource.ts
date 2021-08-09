import {PermissionCategoryIdResource, PermissionIdResource} from './index';

class PermissionResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  id?: string;

  /**
   */
  displayName?: string;

  /**
   */
  description?: string;

  /**
   */
  assignable?: boolean;

  /**
   */
  readOnly?: boolean;

  /**
   * Site compatibility flag set for permission
   */
  siteCompatible?: 'Incompatible' | 'Compatible' | 'Independent';

  /**
   */
  category?: PermissionCategoryIdResource;

  /**
   */
  includedPermissions?: PermissionIdResource[];
}
export default PermissionResource;
