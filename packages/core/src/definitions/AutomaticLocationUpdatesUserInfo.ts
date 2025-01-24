import type AutomaticLocationUpdatesSiteInfo from "./AutomaticLocationUpdatesSiteInfo";

interface AutomaticLocationUpdatesUserInfo {
  /**
   * Internal identifier of a device
   */
  id?: string;

  /**
   * User name
   */
  fullName?: string;

  /** */
  extensionNumber?: string;

  /**
   * Specifies whether Automatic Location Updates feature is enabled
   */
  featureEnabled?: boolean;

  /**
   * User extension type
   */
  type?: "User" | "Limited";

  /** */
  site?: AutomaticLocationUpdatesSiteInfo;

  /**
   * Department name
   */
  department?: string;
}

export default AutomaticLocationUpdatesUserInfo;
