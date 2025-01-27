import AssignedRoleResource from "./AssignedRoleResource.js";

interface AssignedRolesResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  records?: AssignedRoleResource[];
}

export default AssignedRolesResource;
