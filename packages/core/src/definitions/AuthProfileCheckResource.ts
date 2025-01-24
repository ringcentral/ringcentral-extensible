import type ActivePermissionResource from "./ActivePermissionResource";

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
