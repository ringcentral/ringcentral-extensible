interface DefaultUserRole {
  /**
   * Link to a default role resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a default role
   */
  id?: string;

  /**
   * Custom name of a default role
   * Example: My Custom User Role
   */
  displayName?: string;

  /**
   * Site compatibility of a user role
   */
  siteCompatible?: boolean;
}

export default DefaultUserRole;
