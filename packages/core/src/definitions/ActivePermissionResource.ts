import PermissionIdResource from "./PermissionIdResource";
import RoleIdResource from "./RoleIdResource";

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
