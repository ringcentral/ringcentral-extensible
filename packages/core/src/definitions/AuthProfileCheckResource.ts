import { ActivePermissionResource } from './index';

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
