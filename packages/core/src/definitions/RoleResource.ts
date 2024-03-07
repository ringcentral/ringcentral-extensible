import type PermissionIdResource from './PermissionIdResource';

interface RoleResource {
  /**
   * Link to a role resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a role
   */
  id?: string;

  /**
   * Dispayed name of a role
   * Example: Super Admin
   */
  displayName?: string;

  /**
   * Role description
   * Example: Primary company administrator role
   */
  description?: string;

  /**
   * Site compatibility of a user role
   */
  siteCompatible?: boolean;

  /**
   * Specifies if a user role is custom
   */
  custom?: boolean;

  /**
   * Specifies resource for permission
   */
  scope?: 'Account' | 'AllExtensions' | 'Federation' | 'NonUserExtensions' | 'RoleBased' | 'Self' | 'UserExtensions';

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
