import AssignedRoleResource from "./AssignedRoleResource.js";

interface ExtensionWithRolesResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  extensionId?: string;

  /** */
  roles?: AssignedRoleResource[];
}

export default ExtensionWithRolesResource;
