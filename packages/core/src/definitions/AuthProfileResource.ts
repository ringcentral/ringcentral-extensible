import ActivePermissionResource from "./ActivePermissionResource.js";

interface AuthProfileResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  permissions?: ActivePermissionResource[];
}

export default AuthProfileResource;
