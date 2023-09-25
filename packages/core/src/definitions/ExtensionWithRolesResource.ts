import type AssignedRoleResource from './AssignedRoleResource';

interface ExtensionWithRolesResource {
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
