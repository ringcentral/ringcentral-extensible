import ActivePermissionResource from './ActivePermissionResource';

class AuthProfileCheckResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  successful?: boolean;

  /**
   */
  details?: ActivePermissionResource;
}

export default AuthProfileCheckResource;
