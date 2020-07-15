class AutomaticLocationUpdatesUserInfo {
  /**
   * Internal identifier of a device
   */
  id?: string;

  /**
   * User name
   */
  fullName?: string;

  /**
   */
  extensionNumber?: string;

  /**
   * Specifies if Automatic Location Updates feature is enabled
   */
  featureEnabled?: boolean;

  /**
   * User extension type
   */
  type?: 'User' | 'Limited';

  /**
   * Site data
   */
  site?: string;

  /**
   * Department name
   */
  department?: string;
}

export default AutomaticLocationUpdatesUserInfo;
