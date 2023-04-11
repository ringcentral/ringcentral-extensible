import PermissionIdResource from './PermissionIdResource';

interface RoleResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  id?: string;

  /**
   * Example: Super Admin
   */
  displayName?: string;

  /**
   * Example: Primary company administrator role
   */
  description?: string;

  /**
   * Site compatibility of a user role
   */
  siteCompatible?: boolean;

  /**
   */
  custom?: boolean;

  /**
   */
  scope?: string;

  /**
   */
  hidden?: boolean;

  /**
   * Format: date-time
   */
  lastUpdated?: string;

  /**
   */
  permissions?: PermissionIdResource[];
}

export default RoleResource;
