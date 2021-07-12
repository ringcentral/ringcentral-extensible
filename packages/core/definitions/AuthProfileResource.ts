import {ActivePermissionResource} from './index';

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
