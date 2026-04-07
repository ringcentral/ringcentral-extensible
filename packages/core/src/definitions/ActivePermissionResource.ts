import type EffectiveRoleResource from "./EffectiveRoleResource.js";
import type PermissionIdResource from "./PermissionIdResource.js";

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
