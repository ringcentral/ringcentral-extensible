import AssignedRoleResource from './AssignedRoleResource';

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
