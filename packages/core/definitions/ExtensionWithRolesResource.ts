import {AssignedRoleResource} from './index';

class ExtensionWithRolesResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  extensionId?: string;

  /**
   */
  roles?: AssignedRoleResource[];
}
export default ExtensionWithRolesResource;
