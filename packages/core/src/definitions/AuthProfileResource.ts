import type ActivePermissionResource from "./ActivePermissionResource";

interface AuthProfileResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  permissions?: ActivePermissionResource[];
}

export default AuthProfileResource;
