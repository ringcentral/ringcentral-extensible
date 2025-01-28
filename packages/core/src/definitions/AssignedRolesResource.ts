import AssignedRoleResource from "./AssignedRoleResource";

interface AssignedRolesResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  records?: AssignedRoleResource[];
}

export default AssignedRolesResource;
