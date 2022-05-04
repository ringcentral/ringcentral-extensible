import ActivePermissionResource from './ActivePermissionResource';

class AuthProfileResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  permissions?: ActivePermissionResource[];
}

export default AuthProfileResource;
