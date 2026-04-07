import PermissionIdResource from "./PermissionIdResource.js";
import EffectiveRoleResource from "./EffectiveRoleResource.js";

interface ActivePermissionResource {
  /**
   */
  permission?: PermissionIdResource;

  /**
   */
  effectiveRole?: EffectiveRoleResource;

  /**
   */
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
