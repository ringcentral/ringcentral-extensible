import PermissionIdResource from "./PermissionIdResource.js";
import RoleIdResource from "./RoleIdResource.js";

interface ActivePermissionResource {
  /** */
  permission?: PermissionIdResource;

  /** */
  effectiveRole?: RoleIdResource;

  /** */
  scopes?: (
    | "Account"
    | "AllExtensions"
    | "Federation"
    | "NonUserExtensions"
    | "RoleBased"
    | "Self"
    | "UserExtensions"
  )[];
}

export default ActivePermissionResource;
