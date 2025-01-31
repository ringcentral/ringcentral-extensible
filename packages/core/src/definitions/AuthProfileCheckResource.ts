import ActivePermissionResource from "./ActivePermissionResource.js";

interface AuthProfileCheckResource {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  successful?: boolean;

  /** */
  details?: ActivePermissionResource;
}

export default AuthProfileCheckResource;
