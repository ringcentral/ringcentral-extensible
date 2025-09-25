/**
 * Query parameters for operation readEmergencyLocation
 */
interface ReadEmergencyLocationParameters {
  /**
   * If true, the emergency addresses will be synchronized with the
   *  external provider data
   */
  syncEmergencyAddress?: boolean;
}

export default ReadEmergencyLocationParameters;
